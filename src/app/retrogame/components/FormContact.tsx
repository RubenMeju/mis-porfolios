"use client";

import { useActionState } from "react";
import { sendEmail } from "./actions";
import { ContactFormState } from "../types";

const initialState: ContactFormState = {
  success: false,
  errors: {},
  message: "",
};

export default function FormContact() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );

  return (
    <form className="space-y-6" action={formAction}>
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className={`w-full p-3 bg-indigo-800/50 border ${
            state.errors.name ? "border-red-500" : "border-indigo-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          placeholder="Tu nombre"
        />
        {state.errors.name && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.name}</p>
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
          className={`w-full p-3 bg-indigo-800/50 border ${
            state.errors.email ? "border-red-500" : "border-indigo-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          placeholder="tu@email.com"
        />
        {state.errors.email && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={`w-full p-3 bg-indigo-800/50 border ${
            state.errors.message ? "border-red-500" : "border-indigo-700"
          } rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500`}
          placeholder="Cuéntame sobre tu proyecto..."
        ></textarea>
        {state.errors.message && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`px-8 py-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-md transition-all duration-300 transform hover:scale-105 w-full ${
          isPending ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {isPending ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {state.message && (
        <p className="text-white text-center mt-4">{state.message}</p>
      )}
    </form>
  );
}
