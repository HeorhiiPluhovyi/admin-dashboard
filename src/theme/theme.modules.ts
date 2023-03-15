import {PaletteMode} from "@mui/material";
import {TypographyOptions} from "@mui/material/styles/createTypography";
import {ColorModeContext} from "./theme";

interface Gradient {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export interface ThemeToken {
  grey: Gradient;
  primary: Gradient;
  greenAccent: Gradient;
  redAccent: Gradient;
  blueAccent: Gradient;
}



interface Primary {
  main: string;
}

interface Secondary {
  main: string;
}

interface Neutral {
  dark: string;
  main: string;
  light: string;
}

interface Background {
  default: string;
}

export interface Palette {
  mode: PaletteMode;
  primary: Primary;
  secondary: Secondary;
  neutral: Neutral;
  background: Background;
}

export interface ThemeSettings {
  palette: Palette;
  typography: TypographyOptions;
}
