import Link from "next/link";
import React, { FunctionComponent, Dispatch, useRef, useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Nav.module.css";

interface NavItemProps {
  name: string;
  link: string;
  notHidden?: boolean;
  setIsOpen?: Dispatch<React.SetStateAction<any>>;
}

const NavItem: FunctionComponent<NavItemProps> = ({
  name,
  link,
  notHidden,
  setIsOpen,
}) => {
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div
      className={`${
        !notHidden ? "hidden" : "flex flex-col"
      } md:flex flex-row justify-center items-center ${
        !notHidden ? "gap-4" : ""
      } select-none`}
      onMouseEnter={() => setLinkHovered(true)}
      onMouseLeave={() => setLinkHovered(false)}
    >
      <Link
        href={link}
        className={`text-cyan-800 dark:text-slate-400  hover:text-cyan-600 dark:hover:text-slate-200 cursor-pointer ${
          notHidden && "text-white"
        }`}
        scroll={false}
        onClick={() => {
          setIsOpen && setIsOpen(false);
          document.documentElement.style.overflowY = "scroll";
        }}
      >
        {name}
      </Link>
      <div
        className={` bg-cyan-800 h-4 ${
          linkHovered ? "w-32" : `w-4`
        } transition-all ease-in-out duration-200`}
      ></div>
    </div>
  );
};

export default NavItem;
