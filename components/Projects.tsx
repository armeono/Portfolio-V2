import { FunctionComponent, useState } from "react";
import styles from "../styles/Projects.module.css";
import Project from "./Project";
import ChatImage from '../public/chat.png'
import LibraryImage from '../public/lib.png'
import Shopimage from '../public/shop-photo.png'

interface ProjectsProps {}

const Projects: FunctionComponent<ProjectsProps> = () => {
  const [index, setIndex] = useState<number>(1);

  const projects = [
    {
      id: 1,
      name: "Chat app",
      description: "Real-time chat application build using Angular, Node.js and Socket.io",
      image: ChatImage
    },
    {
      id: 2,
      name: "E-Commerce app",
      description: "E-Commerce application built using React (Typescript) and Node.js (Prisma, Express, Typescript)",
      image: Shopimage
    },
    {
      id: 3,
      name: "Library app",
      description: "Library application built using Angular, Node.js and the Google Books API",
      image: LibraryImage
    },
  ];


  const mod = (n: number, m: number) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  };
  return (
    <div
      id="projects"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div className={styles.carousel}>
        {projects.map((item: any, i: any) => {
          const indexLeft = mod(index - 1, projects.length);
          const indexRight = mod(index + 1, projects.length);

          let className = "";

          if (i === index) {
            className = `${styles.card} ${styles.cardActive}`;
          } else if (i === indexRight) {
            className = `${styles.card} ${styles.cardRight}`;
          } else if (i === indexLeft) {
            className = `${styles.card} ${styles.cardLeft}`;
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
