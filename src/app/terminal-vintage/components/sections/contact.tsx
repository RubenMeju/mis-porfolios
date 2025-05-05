import type React from "react";

import { Github, Linkedin, Mail } from "lucide-react";
import { TypingText } from "../typing-text";
import { BlinkingCursor } from "../blinking-cursor";
import FormContactTerminal from "./FormContactTerminal";

export function Contact() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl mb-4 border-b border-green-500 pb-2">
          <TypingText text="> Contacto" delay={30} />
          <BlinkingCursor />
        </h1>
      </div>

      <div className="space-y-8">
        <div className="text-amber-500 mb-4">
          <TypingText text="$ nano mensaje.txt" delay={20} />
        </div>

        <FormContactTerminal />

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
              <span>rubenmeju@outlook.es</span>
            </a>

            <a
              href="https://github.com/RubenMeju"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-400 hover:text-green-300"
            >
              <Github size={18} />
              <span>github.com/usuario</span>
            </a>

            <a
              href="https://www.linkedin.com/in/ruben-yanez-m/"
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
