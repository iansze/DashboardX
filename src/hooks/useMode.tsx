import { useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "../components/Theme";
import { ThemeMode } from "../types/Types";

export const useMode = () => {
  const [mode, setMode] = useState<ThemeMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return { theme, colorMode };
};
