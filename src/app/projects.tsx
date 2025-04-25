export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  category: "juegos" | "aplicaciones";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Battle City",
    description: "Recreación del clásico juego de NES para practicar.",
    image: "/images-projects/image_battle_city.webp",
    technologies: ["Phaser.js", "JavaScript", "Vite"],
    category: "juegos",
    github: "https://github.com/RubenMeju/Battle_city_nes_vite_phaser",
    demo: "https://battle-city-nes-phaser.vercel.app/",
  },
  {
    id: 2,
    title: "Solitario",
    description:
      "Versión del clásico juego de cartas al mas puro estilo windows 95.",
    image: "/images-projects/image_solitario.webp",
    technologies: ["React", "Redux", "JavaScript"],
    category: "juegos",
    github: "https://github.com/RubenMeju/Solitario_React",
    demo: "https://solitario-react.vercel.app/",
  },
  {
    id: 3,
    title: "Bomberman Clone",
    description:
      "Clon del famoso juego Bomberman desarrollado con JavaScript puro",
    image: "/images-projects/image_bomberman.webp",
    technologies: ["HTML", "JavaScript"],
    category: "juegos",
    github: "https://github.com/RubenMeju/bomberman_nes_in_javascript_vanilla",
    demo: "https://bomberman-nes-in-javascript-vanilla.vercel.app/",
  },
  {
    id: 4,
    title: "Tetris",
    description: "Jugable tanto en dispositivos móviles como en ordenador.",
    image: "/images-projects/image_tetris.webp",
    technologies: ["React", "Redux"],
    category: "juegos",
    github: "https://github.com/RubenMeju/TetrisReduxToolkit",
    demo: "https://tetris-redux-toolkit.vercel.app/",
  },
  {
    id: 5,
    title: "Buscador de Películas",
    description:
      "Aplicación para buscar y guardar información sobre películas usando una API pública.",
    image: "/images-projects/tetris.webp",
    technologies: ["React", "Django", "REST API"],
    category: "aplicaciones",
    github: "#",
    demo: "#",
  },
];
