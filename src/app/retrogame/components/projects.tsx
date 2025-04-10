"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/app/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("todos");

  const filters = [
    { id: "todos", name: "Todos" },
    { id: "juegos", name: "Juegos" },
    { id: "aplicaciones", name: "Aplicaciones" },
  ];

  const filteredProjects =
    activeFilter === "todos"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 inline-block relative">
          Proyectos
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
          Una colección de mis trabajos favoritos, desde juegos retro hasta
          aplicaciones web modernas.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-md transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-yellow-500 text-black font-bold"
                  : "bg-indigo-800 text-white hover:bg-indigo-700"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-indigo-900/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] border-2 border-indigo-800 group"
          >
            <div className="relative overflow-hidden h-64">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-indigo-800 text-xs text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <Github className="h-5 w-5" />
                  <span>Código</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
