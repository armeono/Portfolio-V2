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
      <Link href={link} className="">{name}</Link>
      <div
        className={`bg-cyan-800 h-4 ${
          linkHovered ? "w-16" : `w-4`
        } transition-all`}
      ></div>
    </div>
  );
};

export default NavItem;
