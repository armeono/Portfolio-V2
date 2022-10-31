import React, { Dispatch, FunctionComponent, useState } from "react";
import Image from 'next/image'
import GitIcon from '../public/github-icon.svg'

interface ProjectProps {
  className: any;
  id?: number;
  name?: string;
  setIndex: Dispatch<React.SetStateAction<number>>;
  length: number;
  index: number;
  description: string;
  currentIndex: number
  image: any
}

const Project: FunctionComponent<ProjectProps> = ({
  className,
  id,
  name,
  setIndex,
  index,
  description,
  currentIndex,
  image
}) => {
  const [otherContent, setOtherContent] = useState(false);

  return (
    <div
      className={className}
      onClick={() =>
        id && setIndex((prev) => (prev !== index ? (prev = index) : prev))
      }
      onMouseEnter={() => currentIndex === index && setOtherContent(true)}
      onMouseLeave={() => setOtherContent(false)}
    >
      <div className={`flex flex-col justify-center items-center gap-2 p-5 ${otherContent && 'blur-lg'} transition-all duration-500`}>
        <h2 className="text-5xl">{name}</h2>
        <p className="text-xl text-center">{description}</p>
      </div>

     
        <div className={`absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center ${otherContent ? "opacity-100" : "opacity-0"} items-center transition-all duration-500  px-10 gap-4`}>
           <Image src={image} alt="project-image" className="border-none rounded-md"/>
           <Image src={GitIcon} alt="github-icon" />

        </div>
      
    </div>
  );
};

export default Project;
