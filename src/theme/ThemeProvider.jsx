import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";

export default function ThemeProvider({ children }) {
  const theme = createTheme();
  return <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>;
}
