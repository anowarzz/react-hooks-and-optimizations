import { Dispatch, ReactNode, createContext, useState } from "react";

type TThemeProviderProps = {
  children: ReactNode;
};

export type TThemeContext = {
  dark: boolean;
  setDark: Dispatch<React.SetStateAction<boolean>>;
};



export const ThemeContext = createContext<TThemeContext | undefined>(undefined);

const ThemeProvider = ({ children }: TThemeProviderProps) => {
  const [dark, setDark] = useState(false);

  const values = {
    dark,
    setDark,
  };

  return (
    <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
