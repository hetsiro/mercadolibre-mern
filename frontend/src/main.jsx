import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import MercadoLibreApp from "./MercadoLibreApp.jsx";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <MercadoLibreApp />
    </Provider>
  </BrowserRouter>
  // </StrictMode>
);
