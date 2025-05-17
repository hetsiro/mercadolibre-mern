import { Route, Routes } from "react-router";
import { MercadoLibreRoutes } from "../mercadolibre/routes/MercadoLibreRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";

export const AppRouter = () => {
  const authenticated = true;

  return (
    <Routes>
      {
        <Route
          path="/*"
          element={authenticated ? <MercadoLibreRoutes /> : <AuthRoutes />}
        />
      }
    </Routes>
  );
};
