import { AnimatePresence } from "framer-motion";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { Authenticator } from "../components/Authenticator";

export const RoutesMain = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" />} />
        <Route element={<Authenticator />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
