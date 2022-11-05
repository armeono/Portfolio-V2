import Link from "next/link";
import { FunctionComponent } from "react";
import { useState } from "react";

interface NavItemProps {
  name: string;
  link: string;
}

const NavItem: FunctionComponent<NavItemProps> = ({ name, link }) => {
  const [linkHovered, setLinkHovered] = useState(false);

  return (
    <div
      className="flex flex-row justify-center items-center gap-4"
      onMouseEnter={() => setLinkHovered(true)}
      onMouseLeave={() => setLinkHovered(false)}
    >
      <Link
        href={link}
        className="text-cyan-800 dark:text-slate-400  hover:text-cyan-600 dark:hover:text-slate-200 cursor-pointer"
        scroll={false}
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
