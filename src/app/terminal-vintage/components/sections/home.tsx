"use client";

import { useState, useEffect } from "react";
import { TypingText } from "../typing-text";
import { BlinkingCursor } from "../blinking-cursor";

interface HomeProps {
  onNavigate: (section: "home" | "about" | "projects" | "contact") => void;
}

export function Home({ onNavigate }: HomeProps) {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showSystemLog, setShowSystemLog] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const welcomeTimer = setTimeout(() => setShowWelcome(true), 500);
    const systemLogTimer = setTimeout(() => setShowSystemLog(true), 2000);
    const navigationTimer = setTimeout(() => setShowNavigation(true), 4000);

    return () => {
      clearTimeout(welcomeTimer);
      clearTimeout(systemLogTimer);
      clearTimeout(navigationTimer);
    };
  }, []);

  return (
    <div className="space-y-6">
      <div className="mb-8">
        {showWelcome ? (
          <h1 className="text-2xl md:text-3xl mb-2">
            <TypingText
              text="> Bienvenido al sistema de Rubén Yáñez"
              delay={30}
            />
            <BlinkingCursor />
          </h1>
        ) : (
          <div className="h-8"></div>
        )}
      </div>

      {showSystemLog && (
        <div className="space-y-2 text-amber-500">
          <div>
            <TypingText text="Cargando módulos... OK" delay={20} />
          </div>
          <div>
            <TypingText text="Inicializando perfil... OK" delay={20} />
          </div>
          <div>
            <TypingText text="Verificando conexión... OK" delay={20} />
          </div>
          <div>
            <TypingText text="Cargando proyectos... OK" delay={20} />
          </div>
          <div>
            <TypingText text="Sistema listo para interacción" delay={20} />
          </div>
        </div>
      )}

      {showNavigation && (
        <div className="mt-12 space-y-4">
          <h2 className="text-xl border-b border-green-500 pb-2">
            <TypingText text="Navegación del Sistema" delay={20} />
          </h2>

          <div className="space-y-4 mt-6">
            <button
              onClick={() => onNavigate("about")}
              className="block w-full text-left p-3 border border-green-500 rounded hover:bg-green-900/30 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">$</span>
                <TypingText text="[ENTER] Ver sobre mí" delay={20} />
              </div>
              <div className="text-xs text-green-400 mt-1 pl-5">
                Información personal y habilidades
              </div>
            </button>

            <button
              onClick={() => onNavigate("projects")}
              className="block w-full text-left p-3 border border-green-500 rounded hover:bg-green-900/30 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">$</span>
                <TypingText text="[ENTER] Ver proyectos" delay={20} />
              </div>
              <div className="text-xs text-green-400 mt-1 pl-5">
                Portafolio de trabajos realizados
              </div>
            </button>

            <button
              onClick={() => onNavigate("contact")}
              className="block w-full text-left p-3 border border-green-500 rounded hover:bg-green-900/30 transition-colors"
            >
              <div className="flex items-center">
                <span className="text-amber-500 mr-2">$</span>
                <TypingText text="[ENTER] Contacto" delay={20} />
              </div>
              <div className="text-xs text-green-400 mt-1 pl-5">
                Formulario y redes sociales
              </div>
            </button>
          </div>

          <div className="mt-8 p-4 bg-green-900/20 rounded border border-green-500">
            <div className="text-sm">
              <TypingText
                text="Este sistema simula un entorno retro inspirado en terminales y pantallas BIOS clásicas. Navega por las secciones para descubrir más sobre mi trabajo y experiencia."
                delay={10}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
