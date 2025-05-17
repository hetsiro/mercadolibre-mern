import { Navigate, Route, Routes } from "react-router";
import { LoginPage, RecoveryPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="recovery" element={<RecoveryPage />} />

      <Route path="/*" element={<Navigate to="login" />} />
    </Routes>
  );
};
