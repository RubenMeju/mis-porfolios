"use client";

import { sendEmail } from "@/app/retrogame/components/actions";
import { ContactFormState } from "@/app/retrogame/types";
import { useActionState } from "react";
import { TypingText } from "../typing-text";

const initialState: ContactFormState = {
  success: false,
  errors: {},
  message: "",
};

export default function FormContactTerminal() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );
  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-green-400 mb-1">
          <span className="text-amber-500">$</span> NOMBRE:
        </label>
        <input
          type="text"
          id="name"
          name="name"
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
          name="email"
          className="w-full bg-black border border-green-500 rounded p-2 text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-green-400 mb-1">
          <span className="text-amber-500">$</span> MENSAJE:
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          className="w-full bg-black border border-green-500 rounded p-2 text-green-400 focus:outline-none focus:ring-1 focus:ring-green-500 resize-none"
        />
      </div>

      {state.errors.message && (
        <div className="text-red-500 text-sm">
          Error: {state.errors.message}
        </div>
      )}

      {/* <div className="p-4 border border-green-500 rounded bg-green-900/20">
                      <div className="text-green-400 mb-2">
                        <TypingText text="¡Mensaje enviado correctamente!" delay={20} />
                      </div>
                      <p className="text-green-300">
                        Gracias por contactarme. Responderé a tu mensaje lo antes posible.
                      </p>
                    </div> */}

      <button
        type="submit"
        disabled={isPending}
        className="bg-green-500 text-black px-4 py-2 rounded hover:bg-green-400 transition-colors"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}
