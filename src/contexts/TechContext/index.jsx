import { useContext } from "react";
import { createContext } from "react";

import { toast } from "react-toastify";
import { api } from "../../services/api";
import { UserContext } from "../UserContext";

import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [techData, setTechData] = useState(null);

  const { user, setLoading, loadUser } = useContext(UserContext);
  const techs = user?.techs;

  const deleteTech = async (id) => {
    try {
      const request = await api.delete(`/users/techs/${id}`);

      loadUser();

      toast.success("Tech removida com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const editTech = async (data) => {
    const id = techData.id;

    try {
      const request = await api.put(`/users/techs/${id}`, data);

      loadUser();

      toast.success("Tech editada com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const createTechs = async (item) => {
    try {
      const { data } = await api.post("/users/techs", item);

      loadUser();

      toast.success("Tech cadastrada com sucesso!");
    } catch (error) {
      // console.log(error.response.data);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        createTechs,
        deleteTech,
        editTech,
        modal,
        setModal,
        modalEdit,
        setModalEdit,
        techData,
        setTechData,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
