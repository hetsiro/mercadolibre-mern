import { StrictMode } from "react";
import { store } from "./store/mercadolibre/store.js";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import MercadoLibreApp from "./MercadoLibreApp.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <MercadoLibreApp />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
