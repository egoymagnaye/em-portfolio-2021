import { useEffect, useContext } from "react";

import { EMContext } from "../../context/EMContext";

import HeaderDesktop from "./ForDesktop/HeaderDesktop";
import HeaderMobile from "./ForMobile/HeaderMobile";

const MainHeader = ({ switchThemeHandler }) => {
  const { fetchAllPortfolioHandler, allPortfolio } = useContext(EMContext);

  useEffect(() => {
    fetchAllPortfolioHandler();
  }, []);

  return (
    <>
      <HeaderDesktop
        switchThemeHandler={switchThemeHandler}
        allPortfolio={allPortfolio}
      />
      <HeaderMobile
        switchThemeHandler={switchThemeHandler}
        allPortfolio={allPortfolio}
      />
    </>
  );
};

export default MainHeader;
