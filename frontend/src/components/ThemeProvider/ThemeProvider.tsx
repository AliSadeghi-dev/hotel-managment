"use client";

import React, {
  useState,
  Dispatch,
  SetStateAction,
  createContext,
  FC,
  useEffect,
} from "react";

type ThemeContextType = {
  darkTheme: boolean;
  setDarkTheme: Dispatch<SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType>({
  darkTheme: false,
  setDarkTheme: () => null,
});

const ThemeProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    typeof localStorage !== "undefined" && localStorage.getItem("hotel-theme")
      ? JSON.parse(localStorage.getItem("hotel-theme")!)
      : false
  );

  useEffect(() => {
    localStorage.setItem("hotel-theme", JSON.stringify(darkTheme));
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      <div className={`${darkTheme ? "dark" : ""} min-h-screen`}>
        <div className="dark:text-white dark:bg-black text-[#1E1E1E]">
          {children}
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
