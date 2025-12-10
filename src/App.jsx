import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/common/Header";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/common/Footer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative">
        {/* Fixed animated background - TOUJOURS VISIBLE */}
        <div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 -z-10">
          {/* Gradient orbs */}
          <div className="absolute top-[25%] -left-48 size-96 bg-gray-600 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob"></div>
          <div className="absolute top-[33%] -right-48 size-96 bg-gray-500 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-[33%] size-96 bg-gray-700 rounded-full mix-blend-multiply blur-[96px] opacity-20 animate-blob animation-delay-4000"></div>

          {/* Animated grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          {/* Floating particles - étoiles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute size-1 bg-white rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
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
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
