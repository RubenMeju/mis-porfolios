"use client";

import type React from "react";

import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

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

          {submitStatus === "success" && (
            <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-md text-green-300">
              ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-md text-red-300">
              Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 bg-indigo-800/50 border ${
                  errors.name ? "border-red-500" : "border-indigo-700"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Tu nombre"
              />
              {errors.name && (
                <p className="mt-1 text-red-400 text-sm">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 bg-indigo-800/50 border ${
                  errors.email ? "border-red-500" : "border-indigo-700"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="tu@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full p-3 bg-indigo-800/50 border ${
                  errors.message ? "border-red-500" : "border-indigo-700"
                } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-red-400 text-sm">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 w-full ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
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
