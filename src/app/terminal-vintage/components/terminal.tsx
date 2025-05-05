"use client";

import { useState, useEffect, useRef } from "react";
import { useMobile } from "../hooks/use-mobile";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import { Contact } from "./sections/contact";
import { TypingText } from "./typing-text";
import { Footer } from "./footer";
import { BlinkingCursor } from "./blinking-cursor";
import { Home } from "./sections/home";
import Link from "next/link";

type Section = "home" | "about" | "projects" | "contact";

export function Terminal() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [bootSequenceComplete, setBootSequenceComplete] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    // Simulate boot sequence
    const timer = setTimeout(() => {
      setBootSequenceComplete(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    // Scroll to top when changing sections
    if (terminalRef.current) {
      terminalRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
      {!bootSequenceComplete ? (
        <BootSequence onComplete={() => setBootSequenceComplete(true)} />
      ) : (
        <>
          <div className="flex flex-col md:flex-row gap-4 h-full">
            {/* Terminal window */}
            <div
              ref={terminalRef}
              className="flex-1 border border-green-500 rounded-md p-4 h-[80vh] md:h-[85vh] overflow-y-auto bg-black"
            >
              <div className="terminal-header mb-4 border-b border-green-500 pb-2 flex justify-between">
                <Link href="/" className="relative group flex items-center">
                  <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>

                  {/* Tooltip */}
                  <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 transition-all bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap z-10">
                    Ir al menú
                  </span>
                </Link>

                <div className="text-xs">
                  terminal@portfolio ~ {activeSection}
                </div>
              </div>

              {activeSection === "home" && (
                <Home onNavigate={handleSectionChange} />
              )}
              {activeSection === "about" && <About />}
              {activeSection === "projects" && <Projects />}
              {activeSection === "contact" && <Contact />}
            </div>

            {/* Navigation sidebar - only visible on desktop */}
            {!isMobile && (
              <div className="w-64 border border-green-500 rounded-md p-4 flex flex-col">
                <div className="mb-4 text-center">
                  <TypingText text="SISTEMA OPERATIVO" delay={20} />
                  <div className="text-xs mt-1">v1.0.0</div>
                </div>
                <nav className="flex flex-col gap-2">
                  <button
                    onClick={() => handleSectionChange("home")}
                    className={`text-left p-2 hover:bg-green-900/30 rounded ${
                      activeSection === "home" ? "bg-green-900/30" : ""
                    }`}
                  >
                    <span className="text-amber-500">$</span> cd /inicio
                  </button>
                  <button
                    onClick={() => handleSectionChange("about")}
                    className={`text-left p-2 hover:bg-green-900/30 rounded ${
                      activeSection === "about" ? "bg-green-900/30" : ""
                    }`}
                  >
                    <span className="text-amber-500">$</span> cd /sobre-mi
                  </button>
                  <button
                    onClick={() => handleSectionChange("projects")}
                    className={`text-left p-2 hover:bg-green-900/30 rounded ${
                      activeSection === "projects" ? "bg-green-900/30" : ""
                    }`}
                  >
                    <span className="text-amber-500">$</span> cd /proyectos
                  </button>
                  <button
                    onClick={() => handleSectionChange("contact")}
                    className={`text-left p-2 hover:bg-green-900/30 rounded ${
                      activeSection === "contact" ? "bg-green-900/30" : ""
                    }`}
                  >
                    <span className="text-amber-500">$</span> cd /contacto
                  </button>
                </nav>
                <div className="mt-auto">
                  <div className="text-xs text-green-400 mt-4">
                    <TypingText text="ESTADO DEL SISTEMA: ONLINE" delay={30} />
                  </div>
                  <div className="text-xs text-green-400 mt-2">
                    <TypingText text="MEMORIA: 640K OK" delay={30} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile navigation - only visible on mobile */}
          {isMobile && (
            <div className="mt-4 border border-green-500 rounded-md p-2 flex justify-between">
              <button
                onClick={() => handleSectionChange("home")}
                className={`px-3 py-1 ${
                  activeSection === "home" ? "bg-green-900/30" : ""
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleSectionChange("about")}
                className={`px-3 py-1 ${
                  activeSection === "about" ? "bg-green-900/30" : ""
                }`}
              >
                Sobre Mí
              </button>
              <button
                onClick={() => handleSectionChange("projects")}
                className={`px-3 py-1 ${
                  activeSection === "projects" ? "bg-green-900/30" : ""
                }`}
              >
                Proyectos
              </button>
              <button
                onClick={() => handleSectionChange("contact")}
                className={`px-3 py-1 ${
                  activeSection === "contact" ? "bg-green-900/30" : ""
                }`}
              >
                Contacto
              </button>
            </div>
          )}

          <Footer />
        </>
      )}
    </div>
  );
}

function BootSequence({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex flex-col items-start justify-center h-screen p-8 font-mono text-green-500">
      <TypingText text="INICIANDO SISTEMA..." delay={50} />
      <div className="mt-4">
        <TypingText
          text="CARGANDO BIOS v2.0..."
          delay={30}
          onComplete={() => {}}
        />
      </div>
      <div className="mt-2">
        <TypingText
          text="VERIFICANDO MEMORIA: 640K OK"
          delay={20}
          onComplete={() => {}}
        />
      </div>
      <div className="mt-2">
        <TypingText
          text="CARGANDO MÓDULOS DEL SISTEMA..."
          delay={20}
          onComplete={() => {}}
        />
      </div>
      <div className="mt-2">
        <TypingText
          text="INICIALIZANDO PERFIL DE DESARROLLADOR..."
          delay={20}
          onComplete={() => {}}
        />
      </div>
      <div className="mt-2">
        <TypingText
          text="CARGANDO INTERFAZ..."
          delay={20}
          onComplete={() => {}}
        />
      </div>
      <div className="mt-4">
        <TypingText
          text="SISTEMA LISTO. PRESIONE CUALQUIER TECLA PARA CONTINUAR..."
          delay={30}
          onComplete={onComplete}
        />
        <BlinkingCursor />
      </div>
    </div>
  );
}
