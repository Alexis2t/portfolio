class ContactProtector {
  constructor() {
    this.secretKey = this.generateKey();
    this.interactionCount = 0;
    this.humanVerified = false;
    this.lastMousePosition = { x: 0, y: 0 };
    this.mouseMovements = []; // Historique des mouvements
    this.interactions = {
      mouseMoved: false,
      touched: false,
      scrolled: false,
      clicked: false,
      keyPressed: false
    };

    this.initGlobalListeners();
  }

  initGlobalListeners() {
    if (typeof window === 'undefined') return;

    let lastScrollY = 0;

    // 1. TRACKING AVANCÉ DU MOUVEMENT SOURIS
    window.addEventListener('mousemove', (e) => {
      // Enregistre la position
      this.lastMousePosition = { x: e.clientX, y: e.clientY };
      this.mouseMovements.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
      });

      // Garde seulement les 10 derniers mouvements
      if (this.mouseMovements.length > 10) {
        this.mouseMovements.shift();
      }

      if (!this.interactions.mouseMoved) {
        this.interactions.mouseMoved = true;
        this.trackInteraction('mousemove');
      }
    });

    // 2. VÉRIFICATION DU CLIC
    window.addEventListener('click', (e) => {
      // ✅ Vérifie que le clic est proche de la dernière position souris
      const distanceFromLastMove = Math.sqrt(
        Math.pow(e.clientX - this.lastMousePosition.x, 2) +
        Math.pow(e.clientY - this.lastMousePosition.y, 2)
      );

      // console.log('📍 Distance clic/souris:', distanceFromLastMove + 'px');

      // Si le clic est loin (>50px) de la dernière position souris → suspect
      if (distanceFromLastMove > 50) {
        console.warn('⚠️ Clic suspect (trop loin de la souris)');
        return; // N'incrémente PAS
      }

      // Vérifie qu'il y a eu des mouvements récents (<2s)
      if (this.mouseMovements.length > 0) {
        const lastMove = this.mouseMovements[this.mouseMovements.length - 1];
        const timeSinceMove = Date.now() - lastMove.time;

        if (timeSinceMove > 2000) {
          console.warn('⚠️ Clic trop longtemps après mouvement souris');
          return;
        }
      }

      if (!this.interactions.clicked) {
        this.interactions.clicked = true;
        this.trackInteraction('click');
      }
    });

    // 3. Touch mobile
    window.addEventListener('touchstart', () => {
      if (!this.interactions.touched) {
        this.interactions.touched = true;
        this.trackInteraction('touch');
      }
    }, { passive: true });

    // 4. Scroll intelligent
    document.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY || window.pageYOffset;

      if (
        (this.interactions.mouseMoved || this.interactions.touched) &&
        Math.abs(currentScrollY - lastScrollY) > 50 &&
        !this.interactions.scrolled
      ) {
        this.interactions.scrolled = true;
        this.trackInteraction('scroll');
      }

      lastScrollY = currentScrollY;
    }, { passive: true });

    // 5. Clavier
    window.addEventListener('keydown', () => {
      if (!this.interactions.keyPressed) {
        this.interactions.keyPressed = true;
        this.trackInteraction('keypress');
      }
    });
  }


  // Tracking amélioré avec logs
  trackInteraction(type) {
    this.interactionCount++;
    // console.log(`✅ Interaction: ${type} (Total: ${this.interactionCount})`);

    // Seuil réduit à 2 interactions
    if (this.interactionCount >= 2) {
      this.humanVerified = true;
      // console.log('🎉 Humain vérifié !');
    }
  }

  // Vérification humain
  isHuman() {
    const checks = {
      verified: this.humanVerified,
      hasWindow: typeof window !== 'undefined',
      hasWidth: typeof window !== 'undefined' && window.innerWidth > 0,
      notWebdriver: typeof navigator !== 'undefined' && navigator.webdriver !== true
    };

    // console.log('🔍 Vérification humain:', checks);

    return checks.verified &&
           checks.hasWindow &&
           checks.hasWidth &&
           checks.notWebdriver;
  }


  // Génère une clé basée sur l'environnement du navigateur
  generateKey() {
    const seed = 'pLEGfYHuCp2NaaIn';
    const timestamp = 1704067200000; // Date fixe (01/01/2024)
    const combined = seed + timestamp;

    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }

    const base = Math.abs(hash).toString(36);
    return (base + base + base).slice(0, 16);
  }

  // Encodage multi-couches (à faire une seule fois pour vos données)
  encode(text) {
    // 1. XOR avec clé
    let xored = '';
    for (let i = 0; i < text.length; i++) {
      xored += String.fromCharCode(
        text.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length)
      );
    }

    // 2. Base64
    const b64 = btoa(xored);

    // 3. Split et reverse
    const parts = b64.match(/.{1,4}/g) || [];
    return parts.reverse().join('|');
  }

  // Décodage multi-couches
  decode(encoded) {
    try {
      // 1. Unsplit et unreverse
      const b64 = encoded.split('|').reverse().join('');

      // 2. Décode Base64
      const xored = atob(b64);

      // 3. Dé-XOR
      let result = '';
      for (let i = 0; i < xored.length; i++) {
        result += String.fromCharCode(
          xored.charCodeAt(i) ^ this.secretKey.charCodeAt(i % this.secretKey.length)
        );
      }

      return result;
    } catch (e) {
      return null;
    }
  }

  // Récupère les infos de contact avec vérifications
  async getContact(type) {
    // Vérification #1 : Délai aléatoire (les bots n'attendent pas)
    await this.delay(100 + Math.random() * 200);

    // Vérification #2 : C'est un humain ?
    if (!this.isHuman()) {
      console.warn('🤖 Bot détecté');
      return null;
    }

    // Vérification #3 : Check timestamp (pas de requête instantanée au chargement)
    if (performance.now() < 1000) {
      console.warn('⚡ Trop rapide');
      return null;
    }

    // console.log('Email:', protector.encode(''));
    // console.log('Phone:', protector.encode('+33 6 ...'));
    // console.log('WhatsApp:', protector.encode('https://wa.me/336...'));

    // Données encodées (générez-les avec la méthode encode() une fois)
    const contacts = {
      email: 'DQ4=|WEoR|DwJR|RyQV|ARtR|TVlY|CRMM|Dl1G|EBcP|B10a',
      phone: 'XFc=|VQkU|VUdC|UAsU|RERC|SAsH',
      whatsapp: 'AA==|VFIA|B1VH|V1UL|BhcH|BVwP|TBdD|FAFY|C0xA'
    };

    if (!contacts[type]) return null;

    return this.decode(contacts[type]);
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Instance singleton GLOBALE
const protector = new ContactProtector();

export default protector;
