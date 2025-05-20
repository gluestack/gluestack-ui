import { createContext, useState } from "react";

type ThemeContextType = {
  colorMode: "light" | "dark";
  setColorMode: (mode: "light" | "dark") => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colorMode: "light",
  setColorMode: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colorMode, setColorMode] = useState<"light" | "dark">("dark");

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };