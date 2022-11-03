import { FunctionComponent } from "react";
import instagramIcon from "../public/instagram.svg";
import ytIcon from "../public/youtube.svg";
import gitIcon from "../public/github-icon.svg";
import Image from "next/image";
import linkedinIcon from "../public/linkedin.svg";
import Link from "next/link";

interface ContactProps {
  className: string;
}

const Contact: FunctionComponent<ContactProps> = ({ className }) => {
  const icons = [
    {
      image: linkedinIcon,
      link: "https://www.linkedin.com/in/arman-hadzigrahic-a83010201/",
    },
    {
      image: ytIcon,
      link: "https://www.youtube.com/channel/UClCknUgnsMka4YlSp3XI2cQ",
    },
    {
      image: gitIcon,
      link: "https://github.com/armeono",
    },
    {
      image: instagramIcon,
      link: "https://www.instagram.com/itsarmeon/",
    },
  ];

  return (
    <div
      id="contact"
      className={`${className} h-screen w-full flex flex-col justify-center items-center gap-10`}
    >
      <p className="relative text-4xl z-2 text-center">
        Nothing to see down here, but feel free to{" "}
        <span className="font-semibold">contact me</span> and check out my{" "}
        <span className="font-semibold">Github</span>
      </p>
      <div className="w-full flex flex-row justify-center items-center gap-10">
        {icons.map((icon: any, index: number) => (
          <Link href={icon.link} key={index} target="_blank">
            <Image
              src={icon.image}
              alt="social-media-icon"
              key={index}
              className="relative z-2 ml-2 cursor-pointer hover:scale-110 transition-all duration-200 "
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
