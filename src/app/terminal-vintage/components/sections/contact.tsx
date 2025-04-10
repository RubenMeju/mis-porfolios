"use client";

import type React from "react";

import { useState } from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import { TypingText } from "../typing-text";
import { BlinkingCursor } from "../blinking-cursor";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !message) {
      setError("Por favor complete todos los campos.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Por favor ingrese un email válido.");
      return;
    }

    // In a real app, you would send the form data to a server here
    // For this example, we'll just simulate a successful submission
    setSubmitted(true);
    setError("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl mb-4 border-b border-green-500 pb-2">
          <TypingText text="> Contacto" delay={30} />
          <BlinkingCursor />
        </h1>
      </div>

      <div className="space-y-8">
        {!submitted ? (
          <>
            <div className="text-amber-500 mb-4">
              <TypingText text="$ nano mensaje.txt" delay={20} />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-green-400 mb-1">
                  <span className="text-amber-500">$</span> NOMBRE:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-green-500 rounded p-2 text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-green-400 mb-1">
                  <span className="text-amber-500">$</span> EMAIL:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-green-500 rounded p-2 text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-green-400 mb-1">
                  <span className="text-amber-500">$</span> MENSAJE:
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className="w-full bg-black border border-green-500 rounded p-2 text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm">Error: {error}</div>
              )}

              <button
                type="submit"
                className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </>
        ) : (
          <div className="p-4 border border-green-500 rounded bg-green-900/20">
            <div className="text-green-400 mb-2">
              <TypingText text="¡Mensaje enviado correctamente!" delay={20} />
            </div>
            <p className="text-green-300">
              Gracias por contactarme. Responderé a tu mensaje lo antes posible.
            </p>
          </div>
        )}

        <div className="mt-8">
          <div className="text-amber-500 mb-4">
            <TypingText text="$ cat contacto.txt" delay={20} />
          </div>

          <div className="space-y-4">
            <a
              href="mailto:contacto@ejemplo.com"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Mail size={18} />
              <span>contacto@ejemplo.com</span>
            </a>

            <a
              href="https://github.com/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Github size={18} />
              <span>github.com/usuario</span>
            </a>

            <a
              href="https://linkedin.com/in/usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Linkedin size={18} />
              <span>linkedin.com/in/usuario</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
