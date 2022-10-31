import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NavItem from "../components/NavItem";
import CodeImage from "../public/code.png";
import About from "../components/About";
import Projects from "../components/Projects";
import { useEffect, useState, useRef} from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [activeRoute, setActiveRoute] = useState("");

  const aboutRef = useRef();

  const router = useRouter();

  const listOfLinks = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    setActiveRoute(router.asPath);
  }, [router.asPath, activeRoute]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Arman Hadzigrahic</title>
        <meta name="description" content="Arman Hadzigrahic Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        id="home"
        className="fixed top-10 right-1/4 h-80 w-1/2 rotate-45 bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-2xl opacity-80"
      ></div>
      <div className="fixed top-1/2 right-12 flex flex-col h-full gap-5 z-10 translate-y-[-5%]">
        {listOfLinks.map((item, index: number) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full border-2 border-cyan-800 ${
              activeRoute === `/${item.link}` ? "bg-cyan-800" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
      <div className="flex justify-between items-center h-screen w-screen bg-opacity-0 backdrop-blur-3xl p-10">
        <div className="w-1/2 flex flex-col justify-center items-start gap-3 text-3xl">
          <div className="flex flex-col justify-center items-start gap-4">
            {listOfLinks.map((link, index: number) => (
              <NavItem name={link.name} link={link.link} key={index} />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-row justify-center items-center">
          <div className={styles.img}>
            <Image
              src={CodeImage}
              alt=""
              className="h-full w-full shadow-xl shadow-cyan-400 hover:shadow-cyan-600 border-none rounded-md transition-all ease-linear duration-500"
            />
          </div>
        </div>
      </div>
      <About ></About>
      <Projects></Projects>
    </div>
  );
}
