import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialState) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", initialState);
  return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;
