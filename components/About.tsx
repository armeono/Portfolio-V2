import Image from "next/image";
import { FunctionComponent, Ref } from "react";
import portfolioPic from "../public/portfoliopic.png";
import styles from "../styles/About.module.css";
import polygon from "../public/polygon.svg";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div
      id="about"
      className="w-screen h-screen scroll-smooth flex flex-col justify-center items-center lg:flex-row"
    >
      <div className="relative w-1/2 h-2/3 flex justify-center items-center">
        <div className="relative w-[500px] h-full flex justify-center items-center">
          <div className={styles.shape}></div>
          <div className={styles.shape2}></div>
          <Image
            src={polygon}
            alt="polygon"
            className="absolute bottom-[75px] right-[-75px] "
          />
          <div className="relative h-96 w-96 overflow-hidden">
            <Image
              src={portfolioPic}
              alt="portfolio-pic"
              className="absolute scale-150 right-5 z-10"
            />
          </div>
        </div>
      </div>

      <div className="w-1/2 h-fit">
        <div className="w-4/5 relative flex flex-col justify-center items-center z-10 gap-4">
          <h2 className="text-7xl">About me</h2>
          <p className="text-3xl text-center">
            I&apos;m a 21 year old <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">Computer Science and Engineering</span> student from
            Sarajevo. I have a passion for creating things and an interest in 
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400"> Full-Stack Development</span> and <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-400">AI</span>. 
          </p>
          <p className="text-2xl">Besides programming, I enjoy playing guitar, chess and doing martial arts.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
