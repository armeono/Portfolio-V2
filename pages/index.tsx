import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavItem from "../components/NavItem";
import About from "../components/About";
import Projects from "../components/Projects";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { codeText } from "../codeText";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Contact from "../components/Contact";
import Sun from "../public/sun.svg";
import Moon from "../public/moon.svg";
import Image from "next/image";

export default function Home() {
  const [activeRoute, setActiveRoute] = useState("");
  const elementRef = useRef<any>(null);

  const router = useRouter();

  const listOfLinks = [
    {
      name: "Home",
      link: "#home",
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

  const codeBlockStyle = {
    fontSize: "21px",
    border: "none",
    borderRadius: "5px",
    boxShadow: "0 20px 30px #22d3ee",
  };

  useEffect(() => {
    setActiveRoute(router.asPath);
  }, [router]);

  useEffect(() => {
    elementRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveRoute(`/#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.8 }
    );

    const observedElements = document.querySelectorAll(".observe");
    observedElements.forEach((element) => elementRef.current.observe(element));
  }, [router.asPath, activeRoute]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Arman Hadzigrahic</title>
        <meta name="description" content="Arman Hadzigrahic Portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="Arman Hadzigrahic" />
        <meta
          name="keyword"
          content="Arman Hadzigrahic, Arman Hadzigrahic Portfolio, armeono, hadzigrahic"
        />
      </Head>
      <div
        className={`fixed top-10 right-1/4 h-80 w-1/2 rotate-45 bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-2xl opacity-80`}
      ></div>
      <svg
        className="absolute w-14 h-14 fill-cyan-800 top-5 right-8 z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M11.38 2.019a7.5 7.5 0 1 0 10.6 10.6C21.662 17.854 17.316 22 12.001 22 6.477 22 2 17.523 2 12c0-5.315 4.146-9.661 9.38-9.981z" />

        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
        </>
      </svg>

      <div className="fixed top-1/2 right-12 flex flex-col h-screen gap-5 z-10 translate-y-[-5%]">
        {listOfLinks.map((item, index: number) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full border-2 border-cyan-800 ${
              activeRoute === `/${item.link}` ? "bg-cyan-800" : "bg-transparent"
            }`}
          ></div>
        ))}
      </div>
      <div
        id="home"
        className="observe flex flex-col md:flex-row justify-center md:justify-between items-center h-screen w-full bg-opacity-0 backdrop-blur-3xl p-10"
      >
        <div className="w-1/2 flex flex-col justify-center items-start gap-3 text-3xl">
          <div className="flex flex-col justify-center items-start gap-4">
            {listOfLinks.map((link, index: number) => (
              <NavItem name={link.name} link={link.link} key={index} />
            ))}
          </div>
        </div>
        <div className="w-2/3 flex flex-row justify-center items-center">
          <div className={styles.img}>
            <SyntaxHighlighter
              language="jsx"
              showLineNumbers
              style={dracula}
              customStyle={codeBlockStyle}
            >
              {codeText}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
      <About className="observe" />
      <Projects className="observe" />
      <Contact className="observe" />
    </div>
  );
}
