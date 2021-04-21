import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { IoChevronDownOutline } from "react-icons/io5";

import SwitchTheme from "../SwitchTheme/SwitchTheme";
import PortfolioDropdown from "./Dropdown/PortfolioDropdown";
import Logo from "../Logo/Logo";

const HeaderMobile = ({ switchThemeHandler, allPortfolio }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const mobileMenu = useRef(null);
  const dropdownMenu = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    const tl2 = gsap.timeline({ defaults: { ease: "power1.out" } });

    if (showMenu) {
      tl.to(mobileMenu.current, {
        css: { display: "block" },
        duration: 0.1,
      }).to(mobileMenu.current, { opacity: 1, y: -6, duration: 0.2 });
    } else {
      tl.to(mobileMenu.current, {
        opacity: 0,
        y: 6,
        duration: 0.1,
      }).to(mobileMenu.current, {
        css: { display: "none" },
        duration: 0.2,
      });
    }

    if (toggleDropdown) {
      tl2
        .to(dropdownMenu.current, {
          css: { display: "block", overflow: "auto" },
          duration: 0.1,
        })
        .to(dropdownMenu.current, {
          opacity: 1,
          height: "auto",
          duration: 0.3,
        });
    } else {
      tl2
        .to(dropdownMenu.current, {
          opacity: 0,
          height: 0,
          duration: 0.3,
        })
        .to(dropdownMenu.current, {
          css: { display: "none", overflow: "hidden" },
          duration: 0.5,
        });
    }
  }, [showMenu, toggleDropdown]);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
    setToggleDropdown(false);
  };

  const toggleDropdownHandler = () => {
    setToggleDropdown(!toggleDropdown);
  };

  return (
    <header className="sm:container mx-auto fixed bottom-0 z-50 inset-x-0 md:hidden">
      <nav
        ref={mobileMenu}
        className="mx-4 my-6 p-6 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5  bg-white dark:bg-gray-em100 transition duration-500 h-64 overflow-y-scroll menuDefault"
      >
        <ul className="divide-y divide-black divide-opacity-10 dark:divide-white dark:divide-opacity-10">
          <li className="py-4">
            <Link href="/">
              <a className="block focus:outline-none text-base font-bold text-gray-em300 dark:text-white">
                Home
              </a>
            </Link>
          </li>
          <li className="py-4">
            <button
              onClick={toggleDropdownHandler}
              className="flex items-center w-full justify-between focus:outline-none text-base font-bold text-gray-em300 dark:text-white"
            >
              <span>Portfolio</span>
              <IoChevronDownOutline className="text-lg ml-2 text-gray-em300 dark:text-white" />
            </button>
            <PortfolioDropdown
              dropdownPortfolioMenu={dropdownMenu}
              portfolio={allPortfolio}
            />
          </li>
          <li className="py-4">
            <Link href="/about">
              <a className="block focus:outline-none text-base font-bold text-gray-em300 dark:text-white">
                About
              </a>
            </Link>
          </li>
          <li className="py-4">
            <Link href="/contact">
              <a className="block focus:outline-none text-base font-bold text-gray-em300 dark:text-white">
                Contact
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-2 py-4 bg-white dark:bg-gray-em100 shadow-2xl">
        <div className="flex items-center">
          <div className="flex-1">
            <button
              onClick={toggleMenuHandler}
              className={`toggleMenuBtn hamburger hamburger--collapse p-0 flex mx-auto focus:outline-none ${
                showMenu && "is-active"
              }`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div className="flex-1">
            <span className="flex items-center justify-center relative text-center mobile-logo">
              <Logo />
            </span>
          </div>
          <div className="flex-1">
            <SwitchTheme switchThemeHandler={switchThemeHandler} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
