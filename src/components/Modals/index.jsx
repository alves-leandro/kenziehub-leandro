import { useContext } from "react";
import Modal from "react-modal";
import { TechContext } from "../../contexts/TechContext";
import { CreateTechForm } from "../Forms/CreateTechForm";
import { EditTechForm } from "../Forms/EditTechForm";
import { TechModalList } from "./style";

Modal.setAppElement("#root");

export const TechCreateModal = () => {
  const { modal, setModal } = useContext(TechContext);

  return (
    <div className="modalContainer">
      <TechModalList className="headerTechList">
        <h1>Tecnologias</h1>
        <button onClick={() => setModal(true)}>+</button>
        <Modal
          isOpen={modal}
          onRequestClose={() => setModal(false)}
          contentLabel="Create Tech Modal"
          overlayClassName="modalOverlay"
          className="modalContent"
        >
          <div className="modalTechTitle">
            <h1 className="FormTitle">Cadastrar Tecnologia</h1>
            <button
              className="ButtonCloseModal"
              onClick={() => setModal(false)}
            >
              X
            </button>
          </div>
          <CreateTechForm />
        </Modal>
      </TechModalList>
    </div>
  );
};

export const TechEditModal = (props) => {
  const { modalEdit, setModalEdit } = useContext(TechContext);

  const { techData } = props;

  return (
    <div className="modalContainer">
      <Modal
        isOpen={modalEdit}
        onRequestClose={() => setModalEdit(false)}
        contentLabel="Edit Tech Modal"
        overlayClassName="modalOverlay"
        className="modalContent"
      >
        <div className="modalTechTitle">
          <h1 className="FormTitle">Tecnologia Detalhes</h1>
          <button
            className="ButtonCloseModal"
            onClick={() => setModalEdit(false)}
          >
            X
          </button>
        </div>
        <EditTechForm techData={techData} />
      </Modal>
    </div>
  );
};
