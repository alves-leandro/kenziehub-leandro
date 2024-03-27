import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../Input";
import { StyledButton } from "../../../styles/Button";

import { loginSchema } from "./formSchema";
import { FormLoginStyled } from "./style";
import { LinkStyled } from "../../../styles/Link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { UserContext } from "../../../contexts/UserContext";

export const LoginForm = () => {
  const { userLogin, loading, showPassword, setShowPassword } =
    useContext(UserContext);

  const toggleShowPassword = () => {
    setShowPassword(showPassword ? false : true);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    userLogin(data);
    reset();
  };

  return (
    <FormLoginStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <h1 className="FormTitle">Login</h1>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      <span>{errors.email?.message}</span>

      <div className="passwordDiv">
        <Input
          label="Senha"
          type={showPassword ? "text" : "password"}
          placeholder="Digite aqui sua senha"
          register={register("password")}
          disabled={loading}
        />
        <button type="button" onClick={toggleShowPassword} className="iconEye">
          {!showPassword ? <FaEye /> : <FaEyeSlash />}
        </button>
      </div>
      <span>{errors.password?.message}</span>

      <StyledButton
        buttonSize="default"
        buttonStyle="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Entrando ..." : "Entrar"}
      </StyledButton>
      <p>Ainda não possui conta?</p>

      <LinkStyled to={"/register"} linksize="default" linkstyle="disabled">
        Cadastre-se
      </LinkStyled>
    </FormLoginStyled>
  );
};
