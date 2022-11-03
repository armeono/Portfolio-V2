import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavItem from "../components/NavItem";
import About from "../components/About";
import Projects from "../components/Projects";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { codeText } from "../codeText";
import SyntaxHighlighter from "react-syntax-highlighter";
import  {dracula}  from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Contact from "../components/Contact";

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
  }
  
  useEffect(() => {
    setActiveRoute(router.asPath);
  }, [router])
  
  useEffect(() => {
    elementRef.current = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          setActiveRoute(`/#${entry.target.id}`)
        }
      })
    }, {threshold: 0.8})

    const observedElements = document.querySelectorAll('.observe')
    observedElements.forEach(element => elementRef.current.observe(element))

  }, [router.asPath, activeRoute]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Arman Hadzigrahic</title>
        <meta name="description" content="Arman Hadzigrahic Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`fixed top-10 right-1/4 h-80 w-1/2 rotate-45 bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-2xl opacity-80`}
      ></div>
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
      <div id="home" className="observe flex flex-col md:flex-row justify-between items-center h-screen w-full bg-opacity-0 backdrop-blur-3xl p-10">
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
            >{codeText}</SyntaxHighlighter>
          </div>
        </div>
      </div>
      <About className="observe"/>
      <Projects className="observe"/>
      <Contact className="observe"/>
    </div>
  );
}
