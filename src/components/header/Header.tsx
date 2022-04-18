import React, { useState } from "react";

// components
import { Logo } from "../logo/Logo";
import { HeaderItem } from "./HeaderItem";

// images
import openMenuButton from "../../assets/images/mobile_menu.svg";
import closeMenuButton from "../../assets/images/mobile_menu_close.svg";

export const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenu = { transform: `translateX(0%)` };
  const closeMenu = { transform: `translateX(100%)` };

  const menu = () => {
    if (window.innerWidth <= 868) {
      if (showMenu) {
        return openMenu;
      } else {
        return closeMenu;
      }
    } else {
      return openMenu;
    }
  };

  return (
    <header className="fixed top-0 z-50 px-8 bg-slate-900/80 w-[100%] sm:px-16 lg:backdrop-blur lg:bg-transparent ">
      <div className="container mx-auto flex justify-between items-center  lg:border-b-2 border-gray-600/30">
        <Logo />

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden block absolute right-[3.5rem] w-10 h-10 border-none bg-transparent z-[9999]"
        >
          <img
            src={showMenu ? closeMenuButton : openMenuButton}
            alt="menu"
            className="m-auto"
          />
          <span className="sr-only">Menu</span>
        </button>

        <nav
          style={menu()}
          onClick={() => setShowMenu(!showMenu)}
          className="flex lg:relative text-3xl lg:font-light lg:justify-center lg:flex-row
                            lg:backdrop-blur-none lg:bg-transparent lg:gap-0 transition
                            fixed inset-0 bg-nasa-blue/30 backdrop-blur-[16px] gap-[8rem]
                            px-[8rem] lg:px-0 py-[2rem] lg:py-0 flex-col justify-center items-center text-center lg:space-x-[2rem] xl:space-x-[3rem]"
        >
          <HeaderItem name="About" link="#about" />
          <HeaderItem name="Rovers" link="#rovers" />
          <HeaderItem name="Nasa API" link="https://api.nasa.gov" />
          <HeaderItem
            name="Github"
            link="https://github.com/Wordllban/react-mars-rovers"
          />
          <HeaderItem
            name="Contact me"
            link="https://www.linkedin.com/in/kostiantyn-mininkov-9869a4217/"
          />
        </nav>
      </div>
    </header>
  );
};
