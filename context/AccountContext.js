"use client";
import { createContext, useReducer } from "react";

export const AccountContext = createContext();

const accountReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TYPE":
      return { ...state, type: action.payload };
    default:
      return state;
  }
};

export function AccountProvider({ children }) {
  const [state, dispatch] = useReducer(accountReducer, {
    type: "",
  });

  const changeType = (type) => {
    dispatch({ type: "CHANGE_TYPE", payload: type });
  };

  return (
    <AccountContext.Provider value={{ ...state, changeType }}>
      {children}
    </AccountContext.Provider>
  );
}
