import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import {theme} from "../utils/theme.js";
import PropTypes from "prop-types";

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
