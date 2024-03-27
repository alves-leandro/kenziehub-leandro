import { Animation } from "../../components/Animation";
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Header } from "../../components/Header";
import { LinkStyled } from "../../styles/Link";
import { RegisterMainDivStyled } from "./style";

export const RegisterPage = () => {
  return (
    <RegisterMainDivStyled>
      <div className="formDiv">
        <Animation>
          <Header>
            <LinkStyled to={"/login"} linksize="medium" linkstyle="disabled">
              Voltar
            </LinkStyled>
          </Header>
          <RegisterForm />
        </Animation>
      </div>
    </RegisterMainDivStyled>
  );
};
