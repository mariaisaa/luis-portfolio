"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Curso básico Phyton",
    description: "Profundización la escritura de código limpio y buenas prácticas de programación, además de introducir herramientas clave como Git y entornos virtuales para un desarrollo eficiente y organizado.",
    image: "/images/projects/1.png",
    tag: ["Todos", "Certificaciones"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Apis con .NET",
    description: "Desarrollo de habilidades prácticas para construir servicios web eficientes y escalables, aplicando conceptos clave como rutas, controladores, autenticación y manejo de errores usando .Net como framework.",
    image: "/images/projects/2.png",
    tag: ["Todos", "Certificaciones"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Comprehensions, lambdas y manejo de herrores",
    description: "Exploración de conceptos más avanzados, incluyendo comprensiones de listas (list comprehensions), el uso de lambdas, y estrategias efectivas para el manejo de errores en Python, desarrollando competencias sólidas en el uso práctico de Python",
    image: "/images/projects/3.png",
    tag: ["Todos", "Certificaciones"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Programación orientada a objetos ",
    description: "Comprensión profunda y habilidades prácticas en la aplicación de los principios de la programación orientada a objetos utilizando Python.",
    image: "/images/projects/4.png",
    tag: ["Todos", "Certificaciones"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Juego ahorcado",
    description: "Juego clásico, desarrollado con Phyton donde un jugador intenta adivinar una palabra oculta letra por letra. Cada letra correcta revela su posición en la palabra, mientras que cada letra incorrecta añade un elemento al dibujo del ahorcado",
    image: "/images/projects/5.jpeg",
    tag: ["Todos", "Proyectos"],
    gitUrl: "https://github.com/Luisaguilerabe/Python/blob/main/juego_ahorcado.py",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Conversor de moneda",
    description: "Esta app está desarrollada en Phyton y diseñada para realizar conversiones de valores entre diferentes unidades monetarias. Su función principal es permitir a los usuarios ingresar una cantidad en una divisa específica y obtener el equivalente en otra divisa, utilizando tasas de cambio actualizadas",
    image: "/images/projects/6.jpeg",
    tag: ["Todos", "Proyectos"],
    gitUrl: "https://github.com/Luisaguilerabe/Python/blob/main/conversor.py",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Generador de contraseña",
    description: "Crea automáticamente combinaciones aleatorias de caracteres para formar contraseñas seguras y difíciles de adivinar",
    image: "/images/projects/7.jpeg",
    tag: ["Todos", "Proyectos"],
    gitUrl: "https://github.com/Luisaguilerabe/Python/blob/main/generador_contrasena.py",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis certificaciones y proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Proyectos"
          isSelected={tag === "Proyectos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Certificaciones"
          isSelected={tag === "Certificaciones"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
