import { useEffect, useState } from "react";

const technologies = [
  { name: "React", base: 90 },
  { name: "Django", base: 85 },
  { name: "Phaser.js", base: 80 },
  { name: "JavaScript", base: 95 },
  { name: "TypeScript", base: 85 },
  { name: "APIs REST", base: 80 },
  { name: "Vite", base: 75 },
];
const About = () => {
  const [levels, setLevels] = useState(
    technologies.map((tech) => ({
      name: tech.name,
      level: tech.base,
      base: tech.base,
    }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLevels((prevLevels) =>
        prevLevels.map((tech) => {
          const variation = Math.random() * 10 - 5; // -5% a +5%
          let newLevel = tech.base + variation;

          // Clamp entre 50 y 100
          newLevel = Math.max(50, Math.min(newLevel, 100));

          return {
            ...tech,
            level: newLevel,
          };
        })
      );
    }, 1000); // actualiza cada 1 segundo

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 inline-block relative">
          Sobre mí
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-400"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-indigo-900/50 p-8 rounded-lg border-2 border-indigo-800">
            <h3 className="text-2xl font-bold mb-2 text-yellow-400">
              Mis Habilidades
            </h3>
            <h4 className="text-sm font-bold mb-6 text-white">
              Siempre aprendiendo
            </h4>
            <div className="space-y-6">
              {levels.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{tech.name}</span>
                    <span>{Math.round(tech.level)}%</span>
                  </div>
                  <div className="h-3 w-full bg-indigo-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${tech.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="space-y-6 text-lg">
            <p>
              Soy un desarrollador full-stack{" "}
              <span className="text-yellow-400">autodidacta</span>, apasionado
              por crear experiencias digitales que combinan funcionalidad y
              nostalgia.
            </p>

            <p>
              Comencé hace 5 años recreando juegos clásicos y hoy me especializo
              en <span className="text-yellow-400">React</span> para el
              frontend, <span className="text-green-400">Django</span> para el
              backend, y <span className="text-blue-400">Phaser.js</span> para
              juegos interactivos.
            </p>

            <p>
              Creo que los videojuegos clásicos enseñan mucho sobre diseño y
              experiencia de usuario, principios que aplico en cada proyecto.
            </p>

            <p>
              Me esfuerzo por crear soluciones elegantes y funcionales,
              siguiendo las mejores prácticas de desarrollo y diseño.
            </p>

            <p>
              Fuera del código, disfruto jugando RPGs, explorando nuevas
              tecnologías y colaborando en código abierto.
            </p>
          </div>
        </div>
      </div>

      {/* Pixel art decorations */}
      <div className="mt-20 grid grid-cols-10 gap-2">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="h-8 rounded-sm"
            style={{
              backgroundColor: [
                "#FF5555",
                "#FF8855",
                "#FFFF55",
                "#55FF55",
                "#55FFFF",
                "#5555FF",
                "#FF55FF",
                "#FFFFFF",
                "#FFAA55",
                "#55FFAA",
              ][i],
              opacity: 0.7,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default About;
