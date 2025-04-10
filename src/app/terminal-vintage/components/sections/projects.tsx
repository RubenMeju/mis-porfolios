"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { TypingText } from "../typing-text";
import { BlinkingCursor } from "../blinking-cursor";
import { Project, projects } from "@/app/projects";

export function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowProjects(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleBackClick = () => {
    setSelectedProject(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl mb-4 border-b border-green-500 pb-2">
          <TypingText text="> Proyectos" delay={30} />
          <BlinkingCursor />
        </h1>
      </div>

      {showProjects && !selectedProject && (
        <div>
          <div className="text-amber-500 mb-4">
            <TypingText text="$ ls -la /proyectos/" delay={20} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => handleProjectClick(project)}
                className="text-left border border-green-500 rounded p-4 hover:bg-green-900/30 transition-colors"
              >
                <div className="flex items-center mb-2">
                  <span className="text-amber-500 mr-2">$</span>
                  <TypingText text={project.title} delay={10} />
                </div>
                <div className="text-xs text-green-400 mb-2">
                  {project.technologies.join(" | ")}
                </div>
                <div className="text-sm text-green-300 line-clamp-2">
                  {project.description}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="space-y-4">
          <button
            onClick={handleBackClick}
            className="text-amber-500 hover:underline flex items-center"
          >
            <span className="mr-1">←</span> Volver a la lista
          </button>

          <div className="border border-green-500 rounded p-4">
            <h2 className="text-xl mb-4 text-amber-500">
              {selectedProject.title}
            </h2>

            <div className="relative h-48 md:h-64 w-full mb-4 bg-black/50">
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mb-4">
              <h3 className="text-green-400 mb-2">Descripción:</h3>
              <p className="text-green-300">{selectedProject.description}</p>
            </div>

            <div className="mb-4">
              <h3 className="text-green-400 mb-2">Tecnologías:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-green-900/30 border border-green-500 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300"
                >
                  <Github size={16} />
                  <span>Código Fuente</span>
                </a>
              )}

              {selectedProject.demo && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-green-400 hover:text-green-300"
                >
                  <ExternalLink size={16} />
                  <span>Demo en Vivo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
