import { sendEmail } from "@/app/retrogame/components/actions";
import { ContactFormState } from "@/app/retrogame/types";
import { Send } from "lucide-react";
import { useActionState } from "react";

const initialState: ContactFormState = {
  success: false,
  errors: {},
  message: "",
};
export const FormContact = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState
  );
  return (
    <form action={formAction} className="space-y-6 sm:space-y-8">
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
          required
          className={`w-full px-4 py-3 bg-gray-800 border ${
            state.errors.name ? "border-red-500" : "border-gray-700"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
          placeholder="Tu nombre"
        />
        {/* Mostrar errores */}
        {state.errors.name && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.name}</p>
        )}
      </div>

      {/* Campo Email */}
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
          required
          className={`w-full px-4 py-3 bg-gray-800 border ${
            state.errors.email ? "border-red-500" : "border-gray-700"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white`}
          placeholder="tu@email.com"
        />
        {/* Mostrar errores */}
        {state.errors.email && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.email}</p>
        )}
      </div>

      {/* Campo Mensaje */}
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
          required
          rows={5}
          className={`w-full px-4 py-3 bg-gray-800 border ${
            state.errors.message ? "border-red-500" : "border-gray-700"
          } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white resize-none`}
          placeholder="Cuéntame sobre tu proyecto..."
        />
        {/* Mostrar errores */}
        {state.errors.message && (
          <p className="mt-1 text-red-400 text-sm">{state.errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
      >
        <Send className="h-5 w-5" />
        Enviar Mensaje
      </button>
    </form>
  );
};
