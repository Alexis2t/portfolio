import { useTranslation } from "react-i18next";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { projectsData } from "../../data/projects";

const SkillModal = ({ skill, isOpen, onClose }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  if (!isOpen || !skill) return null;

  const relatedProjects = skill.projects
    ?.map(p => projectsData.find(proj => proj.id === p.id))
    .filter(project => project && project.title) || [];

  const SkillIcon = skill.icon;
  const achievements = skill.achievements?.[currentLang] || [];

  const badgeColors = {
    large: "bg-purple-500/90",
    medium: "bg-blue-500/90",
    small: "bg-green-500/90"
  };

  const renderAchievement = (achievement, index) => {
    if (achievement.subAchievements) {
      return (
        <div key={index} className="space-y-2">
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
            <span className="text-gray-200 font-medium">{achievement.name}</span>
          </div>
          <div className="ml-9 space-y-2">
            {achievement.subAchievements.map((sub, subIdx) => (
              <div key={subIdx} className="flex items-start gap-3">
                <span className="text-blue-400">→</span>
                <span className="text-gray-300 text-sm mt-px">{sub.name}</span>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div key={index} className="flex items-start gap-3">
        <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
        <span className="text-gray-200">{achievement.name}</span>
      </div>
    );
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-gray-900/95 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6 border-b border-white/10"
          style={{
            background: `linear-gradient(135deg, ${skill.iconColor}15, transparent)`
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className="size-16 flex items-center justify-center rounded-2xl"
                style={{
                  backgroundColor: `${skill.iconColor}20`,
                  boxShadow: `0 0 30px ${skill.iconColor}40`
                }}
              >
                <SkillIcon
                  className="text-4xl"
                  style={{ color: skill.iconColor }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{skill.name}</h3>
                {relatedProjects.length > 0 && (
                  <p className="text-gray-400 text-sm mt-1">
                    {relatedProjects.length} projet{relatedProjects.length > 1 ? 's' : ''}
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-90 hover:cursor-pointer"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6 space-y-6">
          {/* Projects Section */}
          {relatedProjects.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-blue-500"></span>
                { t('skills.usedIn') }
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProjects.map(project => (
                  <div
                    key={project.id}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-white font-medium text-sm leading-tight">
                        {project.name}
                      </span>
                      {project.size && (
                        <span
                          className={`px-2 py-1 rounded-lg text-xs font-medium text-white ${badgeColors[project.size]} shrink-0`}
                        >
                          {project.size === "large" && "●●●"}
                          {project.size === "medium" && "●●"}
                          {project.size === "small" && "●"}
                        </span>
                      )}
                    </div>
                    {project.description && (
                      <p className="text-gray-400 text-xs line-clamp-2">
                        {project.description[currentLang]}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements Section */}
          {achievements.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="size-2 rounded-full bg-green-500"></span>
                { t('skills.experience') }
              </h4>
              <div className="space-y-3">
                {achievements.map((achievement, index) => renderAchievement(achievement, index))}
              </div>
            </div>
          )}

          {/* Empty state */}
          {achievements.length === 0 && relatedProjects.length === 0 && (
            <div className="text-center py-8 text-gray-400">
              Aucune information disponible pour cette compétence
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SkillModal;
