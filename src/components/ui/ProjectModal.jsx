import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaClock, FaLightbulb, FaCog, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  // Utiliser project?.id ou project?.name comme clé pour réinitialiser automatiquement
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectId = project?.id || project?.name;

  // Bloquer le scroll quand la modal est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup lors du démontage
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Réinitialiser l'index quand la modal s'ouvre ou le projet change
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, projectId]);

  if (!project) return null;

  // Créer un tableau d'images (image principale + images supplémentaires)
  const allImages = project.images
    ? [project.image, ...project.images]
    : [project.image];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
      }`}
      style={{
        backgroundColor: isOpen ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: isOpen ? 'blur(8px)' : 'blur(0px)',
      }}
      onClick={onClose}
    >
      <div
        className={`relative bg-linear-to-br from-gray-900 to-gray-800 border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ${
          isOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-90 hover:cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Image header avec carrousel */}
        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl group">
          <img
            src={allImages[currentImageIndex]}
            alt={`${project.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500 hover:cursor-pointer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />

          {/* Navigation carrousel */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center bg-gray-900/80 hover:bg-gray-800 border border-white/20 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-10 flex items-center justify-center bg-gray-900/80 hover:bg-gray-800 border border-white/20 rounded-full text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>

              {/* Indicateurs */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'w-8 bg-white'
                        : 'w-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Project name */}
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-lg text-gray-300">
              {project.title[currentLang]}
            </p>
          </div>

          {/* Duration badge */}
          {project.duration[currentLang] && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-gray-900/80 border border-white/20 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <FaClock />
              {project.duration[currentLang]}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Galerie d'images miniatures */}
          {allImages.length > 1 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                {currentLang === 'fr' ? 'Galerie d\'images' : 'Image Gallery'}
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      index === currentImageIndex
                        ? 'border-blue-500 ring-2 ring-blue-500/50'
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {index === currentImageIndex && (
                      <div className="absolute inset-0 bg-blue-500/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Goal - Featured projects only */}
          {project.goal[currentLang] && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 whitespace-pre-line text-justify">
              <div className="flex items-start gap-3">
                <div className="shrink-0 size-10 flex items-center justify-center bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
                  <FaLightbulb className="text-xl text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {currentLang === 'fr' ? 'Objectif du projet' : 'Project Goal'}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.goal[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Process - Featured projects only */}
          {project.process?.[currentLang] && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 whitespace-pre-line text-justify">
              <div className="flex items-start gap-3">
                <div className="shrink-0 size-10 flex items-center justify-center bg-linear-to-br from-green-500/20 to-teal-500/20 rounded-lg">
                  <FaCog className="text-xl text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {currentLang === 'fr' ? 'Processus de création' : 'Creation Process'}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.process[currentLang]}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                {currentLang === 'fr' ? 'Technologies utilisées' : 'Technologies Used'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {project.skills?.[currentLang]?.length > 0 && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-200 mb-4">
                <span className="text-green-400">🎯</span>
                {currentLang === 'fr' ? 'Compétences développées' : 'Skills Developed'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.skills?.[currentLang].map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
                  >
                    <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}


          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            {(
              <a
                href={project.link || '#'}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                onClick={(e) => !project.link && e.preventDefault()}
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg text-white transition-all duration-300 ${
                  project.link
                    ? 'hover:from-green-500/30 hover:to-teal-500/30 cursor-pointer'
                    : 'opacity-50 cursor-not-allowed grayscale'
                }`}
              >
                {project.link ? <FaExternalLinkAlt /> : <FaTimes />}
                {project.link
                  ? (currentLang === 'fr' ? 'Voir le projet' : 'View Project')
                  : (currentLang === 'fr' ? 'Projet hors ligne' : 'Project Offline')
                }
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-300"
              >
                <FaGithub />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
