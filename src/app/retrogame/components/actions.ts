"use server";

import nodemailer from "nodemailer";
import { ContactFormInput, ContactFormState } from "../types";

export async function sendEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const message = formData.get("message")?.toString() || "";

  const errors: Partial<ContactFormInput> = {};
  if (!name) errors.name = "El nombre es requerido";
  if (!email) errors.email = "El email es requerido";
  if (!message) errors.message = "El mensaje es requerido";

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // tu_correo@gmail.com
        pass: process.env.EMAIL_PASS, // contraseña de aplicación
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    });

    return {
      success: true,
      errors: {},
      message: "Mensaje enviado correctamente",
    };
  } catch (error) {
    console.error("🚨 Error al enviar el correo:", error);

    return {
      success: false,
      errors: {},
      message: "Ocurrió un error al enviar el mensaje",
    };
  }
}
