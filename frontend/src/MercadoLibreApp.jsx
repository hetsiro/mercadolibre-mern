import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { theme } from "./theme/theme";
import './styles.css'

export default function MercadoLibreApp() {

  return (
    <>
      <ThemeProvider theme={theme} >
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}
