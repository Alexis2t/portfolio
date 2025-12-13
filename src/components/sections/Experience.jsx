import { useTranslation } from "react-i18next";
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";
import { experiencesData } from "../../data/experiences";

const Experience = () => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  return (
    <section id="experience" className="relative py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Glass container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:p-6 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              { t('experience.title')}
            </h2>
            <p className="text-gray-300 text-sm">
              { t('experience.subtitle') }
            </p>
          </div>

          {/* Experience cards */}
          <div className="space-y-4">
            {experiencesData.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Icon */}
                  <div className="shrink-0">
                    <div className="size-14 flex items-center justify-center rounded-xl bg-linear-to-br from-green-500/20 to-teal-500/20 border border-white/20">
                      <FaBriefcase className="text-2xl text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-700/50 border border-gray-600/30 rounded-full text-xs text-gray-300 mb-3">
                      <FaCalendar className="text-xs" />
                      {item.period[currentLang]}
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-white mb-1">
                      {item.title[currentLang]}
                    </h3>
                    <p className="text-base text-gray-300 mb-2">
                      {item.company}
                    </p>

                    {/* Location (si disponible) */}
                    {item.location && (
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <FaMapMarkerAlt />
                        {item.location[currentLang]}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed mb-3 whitespace-pre-line text-justify">
                      {item.description[currentLang]}
                    </p>

                    {/* Tasks/Achievements */}
                    {item.tasks?.[currentLang] && item.tasks?.[currentLang].length > 0 && (
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                          { t('experience.achievementsTitle') }
                        </h4>
                        <ul className="space-y-1">
                          {(item.tasks[currentLang]).map((task, taskIndex) => (
                            <li
                              key={taskIndex}
                              className="flex items-start gap-2 text-xs text-gray-300"
                            >
                              <span className="text-green-500 mt-0.5">✓</span>
                              <span>{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Technologies (si disponible) */}
                    {item.technologies && item.technologies.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom decoration */}
          <div className="mt-5 pt-3 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs">
              { t('experience.newOpportunities') }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
