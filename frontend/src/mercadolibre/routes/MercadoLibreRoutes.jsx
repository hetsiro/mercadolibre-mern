import { Navigate, Route, Routes } from "react-router";
import { HomePage, ItemPage, SearchPage } from "../pages";

export const MercadoLibreRoutes = () => {

  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home2" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/item/:id" element={<ItemPage />} />

      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
