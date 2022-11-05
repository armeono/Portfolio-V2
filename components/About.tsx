import Image from "next/image";
import { FunctionComponent, Ref, useEffect, useRef } from "react";
import portfolioPic from "../public/portfoliopic.png";
import styles from "../styles/About.module.css";
import polygon from "../public/polygon.svg";

interface AboutProps {
  className: string
}

const About: FunctionComponent<AboutProps> = ({className}) => {
  const observer = useRef<any>(null);
  const hiddenElements = useRef<any>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
        } else {
          entry.target.classList.remove(styles.show);
        }
      });
    });

    hiddenElements.current = document.querySelectorAll(".hide");
    hiddenElements.current.forEach((el: any) => observer.current.observe(el));
  }, []);

  return (
    <div
      id="about"
      className={`${className} w-full h-screen scroll-smooth flex flex-col justify-center items-center lg:flex-row text-cyan-900 dark:text-white`}
    >
      <div className="relative w-1/2 h-[650px] flex justify-center items-center">
        <div className="relative w-[500px] h-full flex justify-center items-center 2xl:scale-150">
          <div
            className={`${styles.hide} hide absolute h-[300px] w-[300px] bg-cyan-400 top-[213px] right-0 z-8`}
            style={{ clipPath: "polygon(25% 0%, 100% 0, 75% 100%, 0% 100%" }}
          ></div>
          <div
            className={`${styles.hide} hide absolute h-[300px] w-[300px] bg-gradient-to-t from-fuchsia-400 to-transparent top-[240px] right-[-30px] z-[-1]`}
            style={{ clipPath: "polygon(25% 0%, 100% 0, 75% 100%, 0% 100%" }}
          ></div>
          <Image
            src={polygon}
            alt="polygon"
            className={`${styles.hide} hide h-[300px] w-[300px] absolute top-[275px] right-[-75px] z-[-1]`}
          />
          <div className={`${styles.imageContainer} ${styles.hide} hide`}>
             <Image
              src={portfolioPic}
              alt="portfolio-pic"
              className={`hide ${styles.image}`}
            />
      
          </div>
        </div>
      </div>

      <div className="w-1/2 h-1/2 flex flex-col justify-center items">
        <div className="w-4/5 relative flex flex-col justify-center items-center z-10 gap-4">
          <h2 className="text-7xl">About me</h2>
          <p className="text-3xl text-center">
            I&apos;m a 21 year old{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              Computer Science and Engineering
            </span>{" "}
            student from Sarajevo. I have a passion for creating things and an
            interest in
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              {" "}
              Full-Stack Development
            </span>{" "}
            and{" "}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">
              AI
            </span>
            .
          </p>
          <p className="text-2xl text-center">
            Besides programming, I enjoy playing guitar, chess and doing martial
            arts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
