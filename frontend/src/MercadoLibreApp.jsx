import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouter } from "./router/AppRouter";
import { theme } from "./theme/theme";
import { Loading } from "./mercadolibre/components";
import './styles.css'

export default function MercadoLibreApp() {

  return (
    <>
      <ThemeProvider theme={theme} >
        <Loading />
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </>
  );
}
