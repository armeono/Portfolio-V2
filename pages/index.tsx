import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import NavItem from "../components/NavItem";
import CodeImage from "../public/code.png";

export default function Home() {
  const listOfLinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Arman Hadzigrahic</title>
        <meta name="description" content="Arman Hadzigrahic Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-10 right-1/4 h-64 w-1/2 rotate-45 bg-gradient-to-r from-fuchsia-400 to-cyan-400 blur-xl"></div>
      <div className="flex justify-between items-center h-screen w-screen bg-opacity-0 backdrop-blur-3xl p-10">
        <div className="w-1/2 flex flex-col justify-center items-start gap-3 text-2xl ">
          <div className="flex flex-col justify-center items-start gap-4">
            {listOfLinks.map((link, index: number) => (
              <NavItem name={link.name} link={link.link} key={index} />
            ))}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-start">

        <div className={styles.img}>
          <Image src={CodeImage} alt="" className="h-fit w-fit shadow-2xl shadow-cyan-400 hover:shadow-cyan-800 border-none rounded-md transition-all ease-linear duration-500" />
        </div>
        </div>
      </div>
    </div>
  );
}
