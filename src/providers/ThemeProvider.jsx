import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {theme} from "../utils/theme.js";

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>;
}
