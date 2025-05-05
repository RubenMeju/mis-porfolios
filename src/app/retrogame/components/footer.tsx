"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [opacities, setOpacities] = useState<string[]>([]);

  useEffect(() => {
    // Generar opacidades aleatorias solo en cliente
    const values = Array.from({ length: 16 }, () =>
      (Math.random() * 0.5 + 0.2).toFixed(2)
    );
    setOpacities(values);
  }, []);

  return (
    <footer className="bg-indigo-950 border-t border-indigo-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              href="#inicio"
              className="text-xl font-bold text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
            >
              DEV8BIT
            </Link>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400"> {currentYear} Rubén Yáñez</p>
            <p className="text-gray-500 text-sm mt-1">
              Hecho con <span className="text-red-500">❤</span> y mucho café
            </p>
          </div>
        </div>

        {/* Pixel art footer decoration */}
        <div className="mt-8 grid grid-cols-16 gap-1">
          {opacities.map((opacity, i) => (
            <div
              key={i}
              className="h-2 bg-yellow-500"
              style={{ opacity }}
            ></div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
