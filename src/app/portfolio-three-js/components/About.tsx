"use client";

import { motion } from "framer-motion";
import { Code, Server, Globe, Database, Cpu, Palette } from "lucide-react";

const skills = [
  {
    name: "Frontend",
    icon: <Code className="h-6 w-6" />,
    items: ["React", "Next.js", "Redux", "Tailwind CSS", "Three.js"],
  },
  {
    name: "Backend",
    icon: <Server className="h-6 w-6" />,
    items: ["Python", "Django", "GraphQL", "Node.js", "Express"],
  },
  {
    name: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Redis"],
  },
  {
    name: "DevOps",
    icon: <Globe className="h-6 w-6" />,
    items: ["Docker", "Kubernetes", "Cloudinary", "CI/CD", "Vercel"],
  },
  {
    name: "Lenguajes",
    icon: <Cpu className="h-6 w-6" />,
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
  {
    name: "Lenguajes",
    icon: <Palette className="h-6 w-6" />,
    items: ["JavaScript", "TypeScript", "Python", "C", "C++"],
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Desarrollador Full Stack con experiencia en la creación de
            aplicaciones web y móviles modernas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">Mi Historia</h3>
            <p className="text-gray-400">
              Me gusta crear interfaces visualmente atractivas, intuitivas y
              fluidas. Trabajo con React, priorizando experiencias limpias,
              rápidas y accesibles. Creo que los detalles visuales marcan la
              diferencia en la experiencia del usuario.
            </p>
            <p className="text-gray-400">
              Aprendí a programar motivado por la curiosidad y el deseo de
              crear. Me interesa explorar nuevas formas de presentar contenido y
              dar vida a ideas interactivas en la web.
            </p>
            <p className="text-gray-400">
              Busco combinar diseño, código y visión en cada proyecto. Sigo
              aprendiendo sobre UX, diseño de interfaces y tendencias modernas.
              También disfruto desarrollar proyectos personales y compartir lo
              que aprendo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  {skill.icon}
                  <h4 className="font-bold">{skill.name}</h4>
                </div>
                <ul className="space-y-1">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm">
                      • {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
