/* eslint-disable react-hooks/purity */
import { useState, useEffect } from 'react';
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";
import ProjectModal from "./components/ui/ProjectModal";
import SkillModal from "./components/ui/SkillModal";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  useEffect(() => {
    if (isProjectModalOpen || isSkillModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [isProjectModalOpen, isSkillModalOpen]);

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsProjectModalOpen(true);
  }
  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  }

  const openSkillModal = (skill) => {
    setSelectedSkill(skill)
    setIsSkillModalOpen(true);
  }
  const closeSkillModal = () => {
    setIsSkillModalOpen(false);
    setTimeout(() => setSelectedSkill(null), 300);
  }

  const particles = [...Array(50)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 5 + Math.random() * 10
  }));

  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        <div className="fixed inset-0 overflow-hidden bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 -z-10">
    {/* Gradient orbs */}
    <div className="absolute top-[25%] -left-48 size-96 bg-gray-600 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob"></div>
    <div className="absolute top-[33%] -right-48 size-96 bg-gray-500 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute -bottom-32 left-[33%] size-96 bg-gray-700 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob animation-delay-4000"></div>

    {/* Animated grid */}
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

    {/* Floating particles */}
    <div className="absolute inset-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute size-1 bg-white rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `-${particle.delay}s`
          }}
        ></div>
      ))}
    </div>
  </div>

        {/* Content qui scroll par-dessus */}
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <Projects openProjectModal={openProjectModal}  />
            <Skills openSkillModal={openSkillModal}  />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>

      <ProjectModal key={selectedProject?.id} project={selectedProject} isOpen={isProjectModalOpen} onClose={closeProjectModal} />
      <SkillModal skill={selectedSkill} isOpen={isSkillModalOpen} onClose={closeSkillModal} />
    </ThemeProvider>
  );
}

export default App;
