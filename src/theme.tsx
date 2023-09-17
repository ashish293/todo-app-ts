import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#8DDFCB',
    },
    success: {
      main: '#4caf50',
      light: '#4caf5090'
    },
    error: {
      main: orange[500],
    },
  }
})
export default theme;