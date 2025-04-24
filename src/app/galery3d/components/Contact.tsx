"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te responderé pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="w-full py-12 sm:py-20 bg-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contacto
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para
            trabajar en nuevos proyectos y colaboraciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            <h3 className="text-2xl font-bold text-white">
              Información de Contacto
            </h3>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-gray-400">rubenmeju@outlook.es</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Phone className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                <p className="text-gray-400">+34 123 456 789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                <p className="text-gray-400">A Coruña, España</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base font-medium text-gray-400 mb-1"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Send className="h-5 w-5" />
                Enviar Mensaje
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
