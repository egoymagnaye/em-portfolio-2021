import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import HoverIntent from "hoverintent";
import { IoChevronDownOutline } from "react-icons/io5";

import PortfolioDropdown from "./Dropdown/PortfolioDropdown";
import SwitchTheme from "../SwitchTheme/SwitchTheme";
import Logo from "../Logo/Logo";

const HeaderDesktop = ({ switchThemeHandler, allPortfolio }) => {
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const dropdownMenu = useRef(null);
  const dropdownTrigger = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    if (toggleDropdown) {
      tl.to(dropdownMenu.current, {
        css: { display: "block" },
        duration: 0.1,
      }).to(dropdownMenu.current, { opacity: 1, y: 6, duration: 0.2 });
    } else {
      tl.to(dropdownMenu.current, {
        opacity: 0,
        y: -6,
        duration: 0.1,
      }).to(dropdownMenu.current, {
        css: { display: "none" },
        duration: 0.2,
      });
    }

    HoverIntent(
      dropdownTrigger.current,
      showDropdownHandler,
      hideDropdownHandler
    ).options({ timeout: 500, interval: 100 });
  }, [toggleDropdown]);

  const toggleDropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  const showDropdownHandler = () => {
    setToggleDropdown(true);
  };

  const hideDropdownHandler = () => {
    setToggleDropdown(false);
  };

  return (
    <div className="sticky top-0 z-50 hidden md:block">
      <header className="container mx-auto max-w-screen-lg xl:max-w-screen-xl bg-white dark:bg-black transition duration-500">
        <div className="flex justify-content items-center py-4 px-4">
          <div className="flex justify-start lg:w-0 sm:flex-1 relative z-0">
            <Logo />
          </div>
          <nav className="md:flex">
            <ul className="flex sm:space-x-14">
              <li className="flex items-center">
                <Link href="/">
                  <a className="sm:text-base lg:text-lg text-gray-em300 dark:text-white">
                    Home
                  </a>
                </Link>
              </li>
              <li ref={dropdownTrigger} className="flex items-center relative">
                <button
                  className="flex items-center focus:outline-none sm:text-base lg:text-lg text-gray-em300 dark:text-white"
                  onClick={toggleDropdownHandler}
                >
                  <span>Portfolio</span>
                  <IoChevronDownOutline className="text-lg ml-2 text-gray-em300 dark:text-white" />
                </button>
                <PortfolioDropdown
                  portfolio={allPortfolio}
                  dropdownRef={dropdownMenu}
                />
              </li>
              <li className="flex items-center">
                <Link href="/about">
                  <a className="sm:text-base lg:text-lg text-gray-em300 dark:text-white">
                    About
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="/contact">
                  <a className="sm:text-base lg:text-lg text-gray-em300 dark:text-white">
                    Contact
                  </a>
                </Link>
              </li>
              <li className="flex items-center">
                <SwitchTheme switchThemeHandler={switchThemeHandler} />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderDesktop;
