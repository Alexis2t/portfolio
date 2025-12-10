import { useTranslation } from "react-i18next";
import { FaCode, FaServer, FaTools } from "react-icons/fa";
import SkillCard from "../ui/SkillCard";
import { skillsData } from "../../data/skills";

const Skills = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: "frontend",
      title: { fr: "Frontend", en: "Frontend" },
      icon: FaCode,
      color: "from-pink-500 to-rose-500",
      skills: skillsData.frontend
    },
    {
      id: "backend",
      title: { fr: "Backend", en: "Backend" },
      icon: FaServer,
      color: "from-blue-500 to-cyan-500",
      skills: skillsData.backend
    },
    {
      id: "tools",
      title: { fr: "Outils & DevOps", en: "Tools & DevOps" },
      icon: FaTools,
      color: "from-purple-500 to-indigo-500",
      skills: skillsData.tools
    }
  ];

  return (
    <section id="skills" className="relative py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Glass container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:p-8 shadow-2xl">

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {t("skills.title")}
            </h2>
            <p className="text-gray-300 text-sm">
              {t("skills.subtitle")}
            </p>
          </div>

          {/* Legend */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-purple-500/90 backdrop-blur-sm shadow-lg shadow-purple-500/30">
                    ●●●
                  </span>
                  <span className="text-sm text-gray-300">
                    {t('skills.largeProject')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-blue-500/90 backdrop-blur-sm shadow-lg shadow-blue-500/30">
                    ●●
                  </span>
                  <span className="text-sm text-gray-300">
                    {t('skills.mediumProject')}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl text-xs font-medium text-white bg-green-500/90 backdrop-blur-sm shadow-lg shadow-green-500/30">
                    ●
                  </span>
                  <span className="text-sm text-gray-300">
                    {t('skills.smallProject')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills par catégories */}
          <div className="space-y-12">
            {categories.map((category, idx) => (
              <div
                key={category.id}
                className="space-y-6 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* En-tête de catégorie */}
                <div className="flex items-center gap-4">
                  <div className={`size-12 flex items-center justify-center rounded-2xl bg-linear-to-br ${category.color} shadow-lg`}>
                    <category.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    {category.title[t("language.current")]}
                  </h3>
                  <div className={`flex-1 h-px bg-linear-to-r ${category.color} opacity-50`}></div>
                </div>

                {/* Grid des skills */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-3">
                  {category.skills.map((skill, index) => (
                    <SkillCard
                      key={index}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
