import { createContext, useState, useMemo } from "react";
import {createTheme, Theme} from "@mui/material";
import {Palette, ThemeSettings, ThemeToken} from "./theme.modules";
import {DARK_THEME, LIGHT_THEME} from "./themeVariables";
import {PaletteMode} from "@mui/material";

// color design tokens export
export const tokens = (mode: PaletteMode): ThemeToken => (mode === 'dark'
  ? DARK_THEME
  : LIGHT_THEME);

// mui theme settings
export const themeSettings = (mode: PaletteMode): ThemeSettings => {
  const colors: ThemeToken = tokens(mode);
  const palette: Palette = mode === "dark"
    ? {
      // palette values for dark mode
      mode: mode,
      primary: {
        main: colors.primary[500],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: colors.primary[500],
      },
    }
    : {
      // palette values for light mode
      mode: mode,
      primary: {
        main: colors.primary[100],
      },
      secondary: {
        main: colors.greenAccent[500],
      },
      neutral: {
        dark: colors.grey[700],
        main: colors.grey[500],
        light: colors.grey[100],
      },
      background: {
        default: "#fcfcfc",
      },
    };
  return {
    palette: {
      ...(palette),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// contacts for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = (): [Theme, typeof colorMode] => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light"
          ? "dark"
          : "light")),
    }), []
  );

  const theme: Theme = useMemo(() => {
    return createTheme(themeSettings(mode))
  }, [mode]);

  return [theme, colorMode];
};
