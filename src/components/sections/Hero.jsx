import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (section) => {
    const element = document.getElementById(section);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 40;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Content avec effet glass */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge animé */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 animate-fade-in-down">
            <span className="size-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">
              {t('hero.available')}
            </span>
          </div>

          {/* Greeting */}
          <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-4 animate-fade-in-down animation-delay-200">
            {t('hero.greeting')}
          </h2>

          {/* Main title with gradient */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-down animation-delay-400">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-gray-200 via-gray-100 to-gray-300 animate-gradient">
              {t('hero.name')}
            </span>
          </h1>

          {/* Role */}
          <div className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-8 animate-fade-in-down animation-delay-600">
            {t('hero.role')}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animation-delay-800">
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-16 animate-fade-in-up animation-delay-1000">
            <button
              onClick={() => scrollTo('projects')}
              className="group relative px-8 py-4 bg-linear-to-r from-gray-700 to-gray-800 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t('hero.cta.projects')}
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border-2 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                {t('hero.cta.contact')}
                <FaEnvelope className="group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-6 animate-fade-in-up animation-delay-1200">
            <a
              href="https://github.com/Alexis2t"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative size-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaGithub className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </a>

            <a
              href="https://linkedin.com/in/alexis-de-temmerman"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative size-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaLinkedin className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </a>

            <a
              href="mailto:de.temmerman.alexis@gmail.com"
              className="group relative size-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              <FaEnvelope className="text-2xl text-white group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 rounded-full bg-linear-to-r from-gray-500 to-gray-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
