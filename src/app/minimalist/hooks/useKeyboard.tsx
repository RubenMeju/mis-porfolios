import { useEffect, useState } from "react";

// Hook personalizado para escuchar teclas presionadas
export const useKeyboard = () => {
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);
      setKeys((prev) => ({ ...prev, [key]: true }));
    };

    const up = (e: KeyboardEvent) => {
      const key = normalizeKey(e.key);
      setKeys((prev) => ({ ...prev, [key]: false }));
    };

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  return keys;
};

// Normaliza la tecla para evitar problemas con caracteres especiales
const normalizeKey = (key: string) => {
  if (key === " ") return "space";
  return key.toLowerCase();
};
