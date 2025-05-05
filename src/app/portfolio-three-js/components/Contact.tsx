"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin } from "lucide-react";
import { FormContact } from "./FormContact";
import Link from "next/link";

export default function Contact() {
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

            <Link
              href="mailto:rubenmeju@outlook"
              className="flex items-start gap-4 "
            >
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">Email</h4>
                <p className="text-gray-400">rubenmeju@outlook.es</p>
              </div>
            </Link>

            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-blue-400" />
              </div>

              <Link href="https://www.linkedin.com/in/ruben-yanez-m/">
                <h4 className="text-lg font-semibold text-white">LinkedIn</h4>

                <p className="text-gray-400">linkedin.com/Rubén-Yañéz/</p>
              </Link>
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
            <FormContact />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
