import { useEffect, useState } from "react";
import { FaTimes, FaExternalLinkAlt, FaGithub, FaClock, FaLightbulb, FaCog, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

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

  const formatText = (text) => {
    return text.split('\n').map((line, i) => (
      <span key={i} className={i > 0 ? "block mt-0.75" : "block"}>
        {line.replace(/\t/g, "\t\t")}
      </span>
    ))
  }

  // Theme colors with complementary palettes
  const getThemeColors = () => {
    if (project.id == 'pawnarena') {
      return {
        bg: 'bg-stone-900/60',
        hoverText: 'hover:text-blue-300',
        text: 'text-blue-400',
        miniPictures: 'border-blue-400 ring-blue-400/30',
        primaryBtn: 'from-blue-500/20 to-blue-600/20 border-blue-500/30',
        secondaryBtn: 'from-slate-500/20 to-slate-600/20 border-slate-500/30',
        skillIcon: 'text-blue-400',
        goalBg: 'from-blue-500/20 to-indigo-500/20',
        goalIcon: 'text-blue-400',
        processBg: 'from-blue-500/20 to-cyan-500/20',
        processIcon: 'text-blue-400'
      };
    }

    if (project.id == 'city-hunters') {
      return {
        bg: 'bg-stone-900/60',
        hoverText: 'hover:text-yellow-400',
        text: 'text-yellow-400',
        miniPictures: 'border-yellow-400 ring-yellow-400/30',
        primaryBtn: 'from-yellow-500/20 to-yellow-500/20 border-yellow-500/30',
        secondaryBtn: 'from-gray-500/20 to-gray-600/20 border-gray-500/30',
        skillIcon: 'text-yellow-400',
        goalBg: 'from-yellow-500/20 to-red-500/20',
        goalIcon: 'text-yellow-400',
        processBg: 'from-yellow-500/20 to-teal-500/20',
        processIcon: 'text-yellow-400'
      };
    }

    if (project.id == 'showsfx') {
      return {
        bg: 'bg-stone-900/60',
        hoverText: 'hover:text-amber-300',
        text: 'text-amber-400',
        miniPictures: 'border-amber-400 ring-amber-400/30',
        primaryBtn: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
        secondaryBtn: 'from-stone-500/20 to-stone-600/20 border-stone-500/30',
        skillIcon: 'text-amber-400',
        goalBg: 'from-amber-500/20 to-yellow-500/20',
        goalIcon: 'text-amber-400',
        processBg: 'from-orange-500/20 to-amber-500/20',
        processIcon: 'text-amber-400'
      };
    }

    // Default theme
    return {
      bg: 'bg-gray-950/10',
      hoverText: 'hover:text-green-400',
      text: 'text-green-400',
      miniPictures: 'border-neutral-500 ring-neutral-500/30',
      primaryBtn: 'from-green-500/20 to-teal-500/20 border-green-500/30',
      secondaryBtn: 'from-gray-500/20 to-gray-600/20 border-gray-500/30',
      skillIcon: 'text-green-400',
      goalBg: 'from-blue-500/20 to-purple-500/20',
      goalIcon: 'text-blue-400',
      processBg: 'from-green-500/20 to-teal-500/20',
      processIcon: 'text-green-400'
    };
  };

  const theme = getThemeColors();

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" />

      <div
        className={`relative ${theme.bg} backdrop-blur-lg border border-white/20 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transition-all duration-300 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center bg-gray-800/80 hover:bg-gray-700 border border-white/20 rounded-full text-white transition-all duration-300 hover:scale-110 hover:rotate-90 hover:cursor-pointer"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl group">
          <img
            src={allImages[currentImageIndex]}
            alt={`${project.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500 hover:cursor-pointer"
          />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />

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

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {allImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.name}
            </h2>
            <p className="text-lg text-gray-300">
              {project.title?.en || project.title}
            </p>
          </div>

          {project.duration?.en && (
            <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1 bg-gray-900/80 border border-white/20 rounded-full text-sm text-gray-300 backdrop-blur-sm">
              <FaClock />
              {project.duration.en}
            </div>
          )}
        </div>

        <div className="p-6 md:p-8 space-y-6">
          {allImages.length > 1 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Image Gallery
              </h3>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {allImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 ${
                      index === currentImageIndex
                        ? `ring-2 ${theme.miniPictures}`
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {project.goal?.en && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 whitespace-pre-line text-justify">
              <div className="flex gap-4 items-center mb-3">
                <div className={`shrink-0 size-10 col-span-1 flex items-center justify-center bg-linear-to-br ${theme.goalBg} rounded-lg`}>
                  <FaLightbulb className={`text-xl ${theme.goalIcon}`} />
                </div>
                <h3 className="text-lg font-bold text-white">Goal</h3>
              </div>
              <p className="sm:ml-14 text-sm col-start-2 text-gray-300 leading-relaxed whitespace-pre-wrap">
                {formatText(project.goal.en)}
              </p>
            </div>
          )}

          {project.process?.en && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-justify">
              <div className="flex items-center gap-4 mb-3">
                <div className={`shrink-0 size-10 flex items-center justify-center bg-linear-to-br ${theme.processBg} rounded-lg`}>
                  <FaCog className={`text-xl ${theme.processIcon}`} />
                </div>
                <h3 className="text-lg font-bold text-white">Creation Process</h3>
              </div>
              <p className="sm:ml-14 text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                {formatText(project.process.en)}
              </p>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                Technologies Used
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

          {project.skills?.en?.length > 0 && (
            <div className="mb-6">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-200 mb-4">
                <span className={theme.skillIcon}>🎯</span>
                Skills Developed
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.skills.en.map((skill, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-2 text-sm text-gray-300 ${theme.hoverText} transition-colors`}
                  >
                    <span className={`${theme.text} mt-0.5 shrink-0`}>✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            <a
              href={project.link || '#'}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              onClick={(e) => !project.link && e.preventDefault()}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r border ${theme.primaryBtn} hover:scale-101 hover:shadow-lg rounded-lg text-white transition-all duration-300 ${
                project.link
                  ? 'hover:brightness-110 cursor-pointer'
                  : 'opacity-50 cursor-not-allowed grayscale'
              }`}
            >
              {project.link ? <FaExternalLinkAlt /> : <FaTimes />}
              {project.link ? 'View Project' : 'Project Offline'}
            </a>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r border ${theme.secondaryBtn} rounded-lg text-white hover:brightness-110 transition-all duration-300`}
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
