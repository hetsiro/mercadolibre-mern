import { Navigate, Route, Routes } from "react-router";
import { HomePage, ItemPage, SearchPage } from "../pages";
import NavBar from "../components/NavBar/NavBar";
import { Loading } from "../components";

export const MercadoLibreRoutes = () => {
  return (
    <>
      <Loading />

      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/item/:id" element={<ItemPage />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
