import Image from "next/image";
import { FunctionComponent, Ref } from "react";
import portfolioPic from "../public/portfoliopic.png";

interface AboutProps {}

const About: FunctionComponent<AboutProps> = () => {
  return (
    <div
      id="about"
      className="observe w-screen h-screen scroll-smooth flex justify-center items-center"
    >
      <div className="relative h-96 w-96 rounded-full overflow-hidden">

        <div className="absolute h-full w-full bg-gradient-to-r from-cyan-400 via-cyan-900 to-transparent rotate-180"></div>
        <Image
          src={portfolioPic}
          alt="portfolio-pic"
          className="absolute scale-150 right-5"
        />
      </div>
      <div className="w-1/2"></div>
    </div>
  );
};

export default About;
