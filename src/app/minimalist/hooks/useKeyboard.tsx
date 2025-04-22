import { useEffect, useState } from "react";

export const useKeyboard = () => {
  const [keys, setKeys] = useState<{ [key: string]: boolean }>({});
  useEffect(() => {
    const down = (e: KeyboardEvent) =>
      setKeys((p) => ({ ...p, [e.key.toLowerCase()]: true }));
    const up = (e: KeyboardEvent) =>
      setKeys((p) => ({ ...p, [e.key.toLowerCase()]: false }));
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);
  return keys;
};
