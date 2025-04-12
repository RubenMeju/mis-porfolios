import type React from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import FormContact from "./FormContact";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="h-6 w-6" />,
      url: "https://github.com/RubenMeju",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-6 w-6" />,
      url: "https://linkedin.com/in/username",
    },
    {
      name: "Email",
      icon: <Mail className="h-6 w-6" />,
      url: "mailto:rubenmeju@outlook.es",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 inline-block relative">
          Contacto
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mt-6">
          ¿Tienes un proyecto en mente? ¡Hablemos sobre cómo podemos trabajar
          juntos!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="bg-indigo-900/50 p-8 rounded-lg border-2 border-indigo-800">
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Envíame un mensaje
          </h3>
          <FormContact />
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6 text-yellow-400">
            Conéctate conmigo
          </h3>

          <div className="space-y-8">
            <p className="text-lg">
              Estoy siempre abierto a nuevas oportunidades, colaboraciones o
              simplemente charlar sobre desarrollo y videojuegos retro.
            </p>

            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-indigo-800/50 rounded-lg hover:bg-indigo-700/50 transition-colors duration-300"
                >
                  <span className="text-yellow-400">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>

            <div className="mt-12 p-6 bg-indigo-800/30 rounded-lg border border-indigo-700">
              <h4 className="text-xl font-bold mb-4 text-yellow-400">
                Horario de Disponibilidad
              </h4>
              <p className="mb-4">Lunes a Viernes: 9:00 - 18:00 (GMT-3)</p>
              <p>Respondo emails en un plazo de 24 horas.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pixel art decorations */}
      <div className="relative h-20 mt-20">
        <div className="absolute bottom-0 left-0 w-8 h-8 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 left-12 w-8 h-16 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 left-24 w-8 h-12 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 left-36 w-8 h-20 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 right-12 w-8 h-16 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 right-24 w-8 h-12 bg-yellow-500 opacity-70"></div>
        <div className="absolute bottom-0 right-36 w-8 h-20 bg-yellow-500 opacity-70"></div>
      </div>
    </div>
  );
};

export default Contact;
