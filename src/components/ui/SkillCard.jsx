import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projects";
import { levelLabels, getSkillLevel } from "../../data/skills";

const SkillCard = ({ skill, index, onClick }) => {
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  // Vérifier que skill.projects existe et filtrer les projets valides
  const relatedProjects = skill.projects
    ?.map(p => projectsData.find(proj => proj.id === p.id))
    .filter(project => project && project.title) || [];

  const level = skill.level || getSkillLevel(relatedProjects);
  const displayLevel = level === 'beginner' ? null : level;

  const levelColors = {
    expert: "border-green-500/50 bg-green-500/10 text-green-500",
    advanced: "border-blue-500/50 bg-blue-500/10 text-blue-500",
    intermediate: "border-yellow-500/50 bg-yellow-500/10 text-yellow-500",
  };

  const badgeColors = {
    large: "bg-purple-500/90",
    medium: "bg-blue-500/90",
    small: "bg-green-500/90"
  };

  const SkillIcon = skill.icon;
  const hasContent = (skill.achievements && skill.achievements[currentLang]?.length > 0);

  return (
    <div
      className={`group relative p-3 rounded-xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-1 border-gray-500/80 bg-gray-500/10 animate-fade-in-up ${hasContent ? 'cursor-pointer' : ''}`}
      style={{ animationDelay: `${index * 0.03}s` }}
      onClick={() => hasContent && onClick && onClick(skill)}
    >
      {/* Icon avec couleur personnalisée */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="size-10 flex items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
          style={{
            backgroundColor: `${skill.iconColor}15`,
            boxShadow: `0 0 20px ${skill.iconColor}30`
          }}
        >
          <SkillIcon
            className="text-3xl"
            style={{ color: skill.iconColor }}
          />
        </div>

        {/* Nom */}
        <span className="text-xs font-medium text-center text-white leading-tight">
          {skill.name}
        </span>
      </div>

      {/* Badge niveau */}
      <div className="mt-2 flex justify-center">
        <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${displayLevel ? 'border' : ''} ${levelColors[level]}`}>
          {levelLabels[currentLang][level]}
        </span>
      </div>

      {/* Project indicators */}
      {skill.projects && skill.projects.length > 0 && (
        <div className="flex items-center justify-center gap-1 flex-wrap mt-2">
          {skill.projects.map((projectRef, idx) => {
            const project = projectsData.find(p => p.id === projectRef.id);
            const projectSize = project?.size;

            return (
              projectSize && (
                <span
                  key={idx}
                  className={`px-1.5 py-0.5 rounded text-xs font-medium text-white ${badgeColors[projectSize]}`}
                  title={project.name}
                >
                  {projectSize === "large" && "●●●"}
                  {projectSize === "medium" && "●●"}
                  {projectSize === "small" && "●"}
                </span>
              )
            );
          })}
        </div>
      )}

      {/* Click indicator for skills with content */}
      {/* {hasContent && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="size-5 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <span className="text-white text-xs">i</span>
          </div>
        </div>
      )} */}

      {/* Tooltip au survol */}
      {relatedProjects.length > 0 && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 z-10">
          <div className="bg-gray-900/95 backdrop-blur-md text-white text-xs rounded-xl shadow-2xl p-3 min-w-[200px] border border-white/10">
            <p className="font-semibold mb-2 border-b border-white/20 pb-1.5">
              { t('skills.usedIn') }
            </p>
            <ul className="space-y-1.5">
              {relatedProjects.slice(0, 3).map(project => (
                <li key={project.id} className="flex items-center gap-1.5">
                  <span className="text-blue-400 mt-0.5">→</span>
                  <span className="flex-1 leading-tight text-gray-100">
                    {project.name}
                  </span>
                </li>
              ))}
              {relatedProjects.length > 3 && (
                <li className="text-gray-300 italic text-center pt-1 border-t border-white/10">
                  +{relatedProjects.length - 3} autre{relatedProjects.length > 4 ? 's' : ''}
                </li>
              )}
            </ul>
            {/* Flèche triangle */}
            <div className="absolute left-1/2 -translate-x-1/2 top-full">
              <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white/10"></div>
              <div className="w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-900/95 absolute -top-1.5 left-1/2 -translate-x-1/2"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillCard;
