"use client";

import { useEffect, useState } from "react";
import { TypingText } from "../typing-text";
import { BlinkingCursor } from "../blinking-cursor";

export function About() {
  const [showContent, setShowContent] = useState(false);
  const [showSkills, setShowSkills] = useState(false);

  useEffect(() => {
    const contentTimer = setTimeout(() => setShowContent(true), 500);
    const skillsTimer = setTimeout(() => setShowSkills(true), 3000);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(skillsTimer);
    };
  }, []);

  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Django",
    "Python",
    "APIs REST",
    "Git",
    "Phaser",
    "MongoDB",
    "SQL",
    "Firebase",
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl mb-4 border-b border-green-500 pb-2">
          <TypingText text="> Sobre Mí" delay={30} />
          <BlinkingCursor />
        </h1>
      </div>

      {showContent && (
        <div className="space-y-4">
          <div className="text-amber-500">
            <TypingText text="$ cat historia-personal.txt" delay={20} />
          </div>

          <div className="space-y-4 text-green-400 pl-4 border-l border-green-500">
            <p>
              <TypingText
                text="Mi historia con la informática comenzó cuando era niño. Desde que tuve mi primer ordenador, quedé fascinado por cómo funcionaba y las posibilidades que ofrecía."
                delay={5}
              />
            </p>

            <p>
              <TypingText
                text="Crecí rodeado de hardware, software y programación. Aprendí a programar por curiosidad, desmontando juegos y aplicaciones para entender cómo funcionaban por dentro."
                delay={5}
              />
            </p>

            <p>
              <TypingText
                text="Soy autodidacta. Cada lenguaje, cada framework, cada tecnología que domino la he aprendido experimentando, creando proyectos personales y enfrentándome a desafíos reales."
                delay={5}
              />
            </p>

            <p>
              <TypingText
                text="Mi pasión por los sistemas antiguos y la estética retro-tech me ha acompañado siempre, pero me mantengo actualizado con las tecnologías modernas para crear soluciones eficientes y robustas."
                delay={5}
              />
            </p>
          </div>
        </div>
      )}

      {showSkills && (
        <div className="mt-8">
          <div className="text-amber-500 mb-4">
            <TypingText text="$ apt list --installed" delay={20} />
          </div>

          <div className="bg-black/50 p-4 border border-green-500 rounded">
            <div className="text-green-400 mb-2">
              <TypingText text="> Instalado:" delay={20} />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 pl-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <TypingText text={skill} delay={10} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 p-4 bg-green-900/20 rounded border border-green-500">
            <div className="text-sm">
              <TypingText
                text="Mi enfoque de aprendizaje siempre ha sido práctico. Creo firmemente que la mejor manera de dominar una tecnología es usándola para construir algo real."
                delay={10}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
