import { useEffect, useState } from "react";

// Hook personalizado para escuchar las teclas presionadas
export const useKeyboard = () => {
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const down = (e: KeyboardEvent) =>
      setKeys((p) => ({ ...p, [e.key.toLowerCase()]: true }));
    const up = (e: KeyboardEvent) =>
      setKeys((p) => ({ ...p, [e.key.toLowerCase()]: false }));

    // Agregar listeners para eventos de teclas
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      // Limpiar los listeners cuando el componente se desmonte
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return keys; // Devuelve el estado de las teclas
};
