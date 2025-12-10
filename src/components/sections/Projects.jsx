import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaStar, FaClock } from "react-icons/fa";
import { projectsData } from "../../data/projects";
import ProjectModal from "../ui/ProjectModal";

const Projects = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  // Séparer le projet featured des autres
  const featuredProject = projectsData.find(p => p.isFeatured);
  const otherProjects = projectsData.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="relative py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Glass container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-5 md:p-6 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {currentLang === 'fr' ? 'Projets Réalisés' : 'Completed Projects'}
            </h2>
            <p className="text-gray-300 text-sm">
              {currentLang === 'fr'
                ? 'Découvrez mes réalisations et projets personnels'
                : 'Discover my achievements and personal projects'}
            </p>
          </div>

          {/* Featured Project - Full width */}
          {featuredProject && (
            <div className="mb-6">
              <div
                onClick={() => handleProjectClick(featuredProject)}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Featured badge */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-xs font-medium text-yellow-300 backdrop-blur-sm">
                    <FaStar className="text-xs" />
                    <span>{currentLang === 'fr' ? 'Projet Principal' : 'Main Project'}</span>
                  </div>

                  {/* Duration badge */}
                  {featuredProject.duration[currentLang] && (
                    <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/50 border border-white/20 rounded-full text-xs text-gray-300 backdrop-blur-sm">
                      <FaClock className="text-xs" />
                      {featuredProject.duration[currentLang]}
                    </div>
                  )}

                  {/* Project name overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                      {featuredProject.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {featuredProject.title[currentLang]}
                    </p>
                  </div>
                </div>

                {/* Content preview */}
                <div className="p-5">
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 line-clamp-2">
                    {featuredProject.description[currentLang]}
                  </p>

                  {/* Technologies preview */}
                  {featuredProject.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.slice(0, 5).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {featuredProject.technologies.length > 5 && (
                        <span className="px-2 py-1 text-xs text-gray-400">
                          +{featuredProject.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  )}

                  {/* CTA */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-sm text-green-400 font-medium group-hover:text-green-300 transition-colors">
                      {currentLang === 'fr' ? 'Cliquez pour voir les détails →' : 'Click to see details →'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Projects - Grid */}
          {otherProjects.length > 0 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-4 px-2">
                {currentLang === 'fr' ? 'Autres Projets' : 'Other Projects'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {otherProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => handleProjectClick(project)}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
                  >
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                      {/* Project name overlay */}
                      <div className="absolute bottom-3 left-3 right-3">
                        <h4 className="text-lg font-bold text-white">
                          {project.name}
                        </h4>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-sm font-semibold text-gray-300 mb-3">
                        {project.title[currentLang]}
                      </p>

                      {/* Technologies preview */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies && project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies && project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-gray-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA */}
                      <div className="mt-3 pt-3 border-t border-white/10">
                        <p className="text-xs text-green-400 font-medium group-hover:text-green-300 transition-colors">
                          {currentLang === 'fr' ? 'Voir les détails →' : 'See details →'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom decoration */}
          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <p className="text-gray-400 text-xs">
              {currentLang === 'fr'
                ? '💡 Cliquez sur un projet pour voir tous les détails'
                : '💡 Click on a project to see all details'}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
