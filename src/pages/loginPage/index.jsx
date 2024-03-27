import { Animation } from "../../components/Animation";
import { LoginForm } from "../../components/Forms/LoginForm";
import { LoginMainDivStyled } from "./style";

export const LoginPage = (props) => {
  return (
    <LoginMainDivStyled>
      <Animation>
        <span className="logo">Kenzie Hub</span>
        <LoginForm />
      </Animation>
    </LoginMainDivStyled>
  );
};
