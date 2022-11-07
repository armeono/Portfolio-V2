import { FunctionComponent, useState } from "react";
import NavItem from "./NavItem";

interface MenuProps {}

const Menu: FunctionComponent<MenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  const openMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  };

  return (
    <div>
      {!isOpen && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="45"
          height="45"
          className="absolute flex md:hidden w-14 h-14 top-8 left-5 z-10 fill-cyan-800 cursor-pointer"
          onClick={openMenu}
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
        </svg>
      )}
      {isOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 z-40 bg-black opacity-80 w-full h-screen overflow-hidden flex justify-center items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            className="absolute flex md:hidden w-14 h-14 top-8 left-5 z-10 fill-cyan-800 cursor-pointer"
            onClick={openMenu}
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>

          <div className="w-full h-full flex flex-col justify-center items-center text-white text-3xl gap-6">
          
            {listOfLinks.map((item, index: number) => (
              <NavItem key={index} name={item.name} link={item.link} notHidden={true} setIsOpen={setIsOpen}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
