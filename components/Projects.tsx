import { FunctionComponent, useState } from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";
import ChatImage from "../public/chat.png";
import LibraryImage from "../public/lib.png";
import Shopimage from "../public/shop-photo.png";

interface ProjectsProps {
  className: string
}

const Projects: FunctionComponent<ProjectsProps> = ({className}) => {
  const [index, setIndex] = useState<number>(1);

  const projects = [
    {
      id: 1,
      name: "Chat app",
      description:
        "Real-time chat application build using Angular, Node.js and Socket.io",
      image: ChatImage,
      url: 'https://github.com/armeono/Realtime-Chat-app'
    },
    {
      id: 2,
      name: "E-Commerce app",
      description:
        "E-Commerce application built using React (Typescript) and Node.js (Prisma, Express, Planetscale)",
      image: Shopimage,
      url: 'https://github.com/armeono/E-Commerce-app'
    },
    {
      id: 3,
      name: "Library app",
      description:
        "Library application built using Angular, Node.js and the Google Books API",
      image: LibraryImage,
      url: 'https://github.com/armeono/Library-app'
    },
  ];

  const mod = (n: number, m: number) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };

  const keyPressed = (e: any) => {
    if(e.key === "ArrowLeft") {
      setIndex(prev => prev !== 0 ? prev - 1 : prev = 2);
    }else if (e.key === "ArrowRight"){
      setIndex(prev => prev !== 2 ? prev + 1 : prev = 0);
    }
  };

  return (
    <div
      id="projects"
      className={`${className} w-full h-screen flex flex-col justify-center items-center`}
      onKeyDown={(e) => keyPressed(e)}
      tabIndex={-1}
    >
      <h1 className="relative z-10 text-7xl text-cyan-800 dark:text-white pt-24">Projects</h1>
      <div className={`${styles.carousel} scale-50 md:scale-75 lg:scale-100`}>
        {projects.map((item: any, i: any) => {
          const indexLeft = mod(index - 1, projects.length);
          const indexRight = mod(index + 1, projects.length);

          let className = "";

          if (i === index) {
            className = `${styles.card} ${styles.cardActive} border border-cyan-800 dark:border-cyan-600`;
          } else if (i === indexRight) {
            className = `${styles.card} ${styles.cardRight} border border-cyan-800 dark:border-cyan-600`;
          } else if (i === indexLeft) {
            className = `${styles.card} ${styles.cardLeft} border border-cyan-800 dark:border-cyan-600`;
          } else {
            className = `${styles.card}`;
          }

          return (
            <Project
              key={item.id}
              className={className}
              {...item}
              setIndex={setIndex}
              length={projects.length}
              index={i}
              currentIndex={index}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
