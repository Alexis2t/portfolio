import { useTranslation } from "react-i18next";
import { FaHeart, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group size-12 flex items-center justify-center rounded-2xl bg-white/5 backdrop-blur-md border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-white group-hover:scale-110 transition-transform duration-300" />
          </button>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {new Date().getFullYear()} Alexis De Temmerman – {t("footer.copyright")}
              <FaHeart className="text-red-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
