import { Route, Routes } from "react-router";
import { MercadoLibreRoutes } from "../mercadolibre/routes/MercadoLibreRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { useSelector } from "react-redux";
import { AUTH_STATUS } from "../auth/components/withStatus/authStatus";

export const AppRouter = () => {
  const { status } = useSelector(( state ) => state.auth );
  const success = status === AUTH_STATUS.SUCCESS;

  return (
    <Routes>
      {
        <Route
          path="/*"
          element={ success ? <MercadoLibreRoutes /> : <AuthRoutes />}
        />
      }
    </Routes>
  );
};
