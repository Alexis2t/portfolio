import { useTranslation } from "react-i18next";
import { FaCode, FaServer, FaDatabase, FaMobile } from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: FaCode, key: "frontend" },
    { icon: FaServer, key: "backend" },
    { icon: FaDatabase, key: "database" },
    { icon: FaMobile, key: "mobile" },
  ];

  return (
    <section
      id="about"
      className="relative py-20 px-4"
    >
      {/* Glass container */}
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            {t("about.title")}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-4 overflow-hidden">
                <img
                  src="https://via.placeholder.com/400x500"
                  alt={t("about.name")}
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                {t("about.description")}
              </p>

              {/* Skills grid */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {skills.map(({ icon: Icon, key }) => (
                  <div
                    key={key}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  >
                    <Icon className="text-3xl text-gray-300 mb-3 group-hover:text-white transition-colors" />
                    <h3 className="text-white font-semibold mb-1">
                      {t(`about.skills.${key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {t(`about.skills.${key}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
