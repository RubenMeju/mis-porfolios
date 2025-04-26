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
    items: ["Node.js", "Express", "Python", "Django", "GraphQL"],
  },
  {
    name: "Bases de Datos",
    icon: <Database className="h-6 w-6" />,
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
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
    name: "Diseño",
    icon: <Palette className="h-6 w-6" />,
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "UI/UX"],
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
              Soy un desarrollador apasionado por crear experiencias digitales
              excepcionales. Con más de 5 años de experiencia en el desarrollo
              web, he trabajado en diversos proyectos que van desde aplicaciones
              empresariales hasta sitios web creativos.
            </p>
            <p className="text-gray-400">
              Mi enfoque se centra en combinar código limpio y eficiente con
              diseños atractivos para crear productos que no solo funcionen
              bien, sino que también proporcionen una excelente experiencia de
              usuario.
            </p>
            <p className="text-gray-400">
              Constantemente estoy aprendiendo nuevas tecnologías y metodologías
              para mantenerme al día con las últimas tendencias en desarrollo
              web y ofrecer las mejores soluciones a mis clientes.
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
