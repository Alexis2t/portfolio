import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaWhatsapp, FaEye } from "react-icons/fa";
import { useState } from "react";
import protector from "../../utils/antiBot";

const Contact = () => {
  const { t } = useTranslation();
  const [revealedCards, setRevealedCards] = useState({});
  const [decodedValues, setDecodedValues] = useState({});
  const [contactLinks, setContactLinks] = useState({});

  const contactCards = [
    {
      icon: FaEnvelope,
      label: t("contact.email"),
      type: "email",
      gradient: "from-blue-500/20 to-cyan-500/20",
      hoverGradient: "from-blue-500/30 to-cyan-500/30",
      iconColor: "text-blue-400",
      hidden: "d••••••••••••••@gmail.com"
    },
    {
      icon: FaPhone,
      label: t("contact.phone"),
      type: "phone",
      gradient: "from-green-500/20 to-emerald-500/20",
      hoverGradient: "from-green-500/30 to-emerald-500/30",
      iconColor: "text-green-400",
      hidden: "+33 6 •• •• •• ••"
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      type: "whatsapp",
      gradient: "from-emerald-500/20 to-teal-500/20",
      hoverGradient: "from-emerald-500/30 to-teal-500/30",
      iconColor: "text-emerald-400",
      hidden: "+33 6 •• •• •• ••"
    }
  ];

  const handleReveal = async (index, type, e) => {
    e.preventDefault();

    // Incrémente le compteur d'interaction
    // protector.trackInteraction();

    // Récupère les infos décodées
    const value = await protector.getContact(type);

    if (!value) {
      alert("❌ " + t("contact.verificationFailed"));
      return;
    }

    // Pour WhatsApp, on stocke à la fois le numéro et le lien
    let displayValue = value;
    let contactValue = value;

    if (type === 'whatsapp') {
      const phoneNumber = value.match(/\d+$/)?.[0] || '';
      displayValue = phoneNumber.replace(/(\d{2})(\d)(\d{2})(\d{2})(\d{2})(\d{2})/, '+$1 $2 $3 $4 $5 $6');
      contactValue = value;
    }

    setDecodedValues(prev => ({
      ...prev,
      [index]: displayValue
    }));

    setContactLinks(prev => ({
      ...prev,
      [index]: contactValue
    }));

    setRevealedCards(prev => ({ ...prev, [index]: true }));

    setTimeout(() => {
      setRevealedCards(prev => ({ ...prev, [index]: false }));
      setDecodedValues(prev => ({ ...prev, [index]: '' }));
      setContactLinks(prev => ({ ...prev, [index]: '' }));
    }, 30000);
  };

  const handleContact = async (index, type, e) => {
    if (!revealedCards[index]) {
      await handleReveal(index, type, e);
    } else {
      // Utilise contactLinks pour WhatsApp, sinon decodedValues
      const value = type === 'whatsapp' ? contactLinks[index] : decodedValues[index];

      if (type === 'email') {
        window.location.assign(`mailto:${value}`);

      } else if (type === 'phone') {
        const cleanPhone = value.replace(/\s/g, '');
        window.location.assign(`tel:${cleanPhone}`);

      } else if (type === 'whatsapp') {
        window.open(value, '_blank', 'noopener,noreferrer');
      }
    }
  };


  return (
    <section id="contact" className="relative py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 md:p-8 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
            {t("contact.title")}
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto text-sm">
            {t("contact.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {contactCards.map((contact, index) => {
              const isRevealed = revealedCards[index];

              return (
                <div
                  key={index}
                  onClick={(e) => handleContact(index, contact.type, e)}
                  className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${contact.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>

                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className={`size-14 bg-linear-to-br ${contact.gradient} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 border border-white/20`}>
                      <contact.icon className={`text-xl ${contact.iconColor}`} />
                    </div>

                    <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">
                      {contact.label}
                    </p>

                    <p className="text-white font-semibold text-base group-hover:text-gray-100 transition-colors duration-300 flex items-center gap-2">
                      {isRevealed ? decodedValues[index] : contact.hidden}
                      {!isRevealed && (
                        <FaEye className="text-gray-400 text-sm group-hover:text-white transition-colors" />
                      )}
                    </p>

                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="text-xs text-gray-300 font-medium">
                        {isRevealed ? t("contact.clickToContact") : t("contact.clickToReveal")} →
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social links... */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
