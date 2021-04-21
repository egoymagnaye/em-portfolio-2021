import Head from "next/head";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import EMContextProvider from "../../context/EMContext";

import Meta from "../Meta/Meta";
import MainHeader from "../Header/MainHeader";
import MainFooter from "../MainFooter/MainFooter";

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <EMContextProvider>
      <Meta />
      <div>
        <MainHeader switchThemeHandler={switchTheme} />
        <main>{children}</main>
        <MainFooter />
      </div>
    </EMContextProvider>
  );
};

export default Layout;
