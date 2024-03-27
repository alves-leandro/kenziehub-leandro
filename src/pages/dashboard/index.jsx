import { useContext } from "react";
import { Header } from "../../components/Header";
import { DashboardMainDivStyled, StyledLi } from "./style";
import { StyledButton } from "../../styles/Button";
import { useNavigate } from "react-router-dom";
import { Animation } from "../../components/Animation";
import { UserContext } from "../../contexts/UserContext";
import { TechCreateModal, TechEditModal } from "../../components/Modals";
import { TechContext } from "../../contexts/TechContext";

export const Dashboard = () => {
  
  const { user } = useContext(UserContext);
  const { techs, setModalEdit, techData, setTechData } = useContext(TechContext);

  const navigate = useNavigate();

  return (
    <Animation>
      <DashboardMainDivStyled>
        <Header>
          <StyledButton
            buttonSize="medium"
            buttonStyle="disabled"
            type="button"
            onClick={() => {
              window.localStorage.clear();
              navigate("/login");
            }}
          >
            Sair
          </StyledButton>
        </Header>
        <div className="containerUserInfo">
          <div className="userInfo">
            <span>Olá, {user?.name} </span>
            <span>{user?.course_module}</span>
          </div>
        </div>
        <div className="mainDivDash">
          <TechCreateModal /> {/* Abre modal de criação de Techs */}
          <div className="containerList">
            <ul>
              {!techs.length ? (
                <div className="emptyUl">
                  <p >Lista vazia</p>
                </div>
              ) : (
                techs.map((usertech) => (
                  <StyledLi
                    key={usertech.id}
                    onClick={() => {
                      setModalEdit(true);
                      setTechData({
                        id: usertech.id,
                        title: usertech.title,
                        status: usertech.status,
                      });
                    }}
                  >
                    <div className="techTitle">
                      <span>{usertech.title}</span>
                    </div>
                    <div className="techStatus">
                      <span>{usertech.status}</span>
                    </div>
                  </StyledLi>
                ))
              )}
              <TechEditModal techData={techData} />
            </ul>
          </div>
        </div>
      </DashboardMainDivStyled>
    </Animation>
  );
};
