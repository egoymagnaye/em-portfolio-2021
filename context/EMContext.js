import React, { useReducer } from "react";

import updateObject from "../utils/updateObject";
import { getAllPortfolio } from "../utils/lib/portfolio";

export const EMContext = React.createContext();

// The initial state
const initialState = {
  allPortfolio: [],
};

const emReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FETCH_ALL_PORTFOLIO":
      return updateObject(state, { allPortfolio: payload });

    default:
      throw new Error();
  }
};

const EMContextProvider = (props) => {
  const [emState, dispatch] = useReducer(emReducer, initialState);

  const fetchAllPortfolioHandler = async () => {
    const data = await getAllPortfolio();

    dispatch({ type: "FETCH_ALL_PORTFOLIO", payload: data });
  };

  return (
    <EMContext.Provider
      value={{
        allPortfolio: emState.allPortfolio,
        fetchAllPortfolioHandler,
      }}
    >
      {props.children}
    </EMContext.Provider>
  );
};

export default EMContextProvider;
