import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  async function loadUser() {
    const token = localStorage.getItem("@TOKEN");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      const { data } = await api.get("/profile");
      
      setUser(data);
      
    } catch (error) {
      console.error(error);
      window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
  loadUser();
  }, []);

  const userLogin = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/sessions", data);

      const { token, user: userResponse } = response.data;

      setUser(userResponse);

      window.localStorage.setItem("@TOKEN", token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      toast.success("Login feito com sucesso!");

      const toNavigate = location.state?.from?.pathname || "/dashboard";

      setTimeout(() => {
        navigate(toNavigate, { replace: true });
      }, 3000);
      
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const userRegister = async (data) => {
    try {
      setLoading(true);
      const response = await api.post("/users", data);
      // console.log(response);

      toast.success("Registro feito com sucesso!");

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userLogin,
        userRegister,
        loading,
        setLoading,
        showPassword,
        setShowPassword,
        loadUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
