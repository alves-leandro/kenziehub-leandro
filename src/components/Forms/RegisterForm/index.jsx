import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./formSchema";
import { Input, Select } from "../../Input";
import { StyledButton } from "../../../styles/Button";
import { FormRegisterStyled } from "./style";
import { UserContext } from "../../../contexts/UserContext";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const { userRegister } = useContext(UserContext)

  const onSubmit = (data) => {
    userRegister(data);
    reset();
  };

  return (
    <FormRegisterStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <h3>Crie sua Conta</h3>
      <p>Rápido e grátis, vamos nessa</p>

      <Input
        label="Nome"
        id="name"
        type="text"
        placeholder="Digite aqui seu nome"
        register={register("name")}
        disabled={loading}
      />
      <span>{errors.name?.message}</span>

      <Input
        label="Email"
        id="email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        disabled={loading}
      />
      <span>{errors.email?.message}</span>

      <Input
        label="Senha"
        id="password"
        type="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
        disabled={loading}
      />
      <span>{errors.password?.message}</span>

      <Input
        label="Confirmar Senha"
        type="password"
        placeholder="Digite novamente sua senha"
        register={register("checkPassword")}
        disabled={loading}
      />
      <span>{errors.checkPassword?.message}</span>

      <Input
        label="Bio"
        id="bio"
        type="text"
        placeholder="Fale sobre você"
        register={register("bio")}
        disabled={loading}
      />
      <span>{errors.bio?.message}</span>

      <Input
        label="Contato"
        id="contact"
        type="text"
        placeholder="Opção de contato"
        register={register("contact")}
        disabled={loading}
      />
      <span>{errors.contact?.message}</span>

      <Select
        label="Selecionar módulo"
        id="course_module"
        register={register("course_module")}
        disabled={loading}
      />
      <span>{errors.course_module?.message}</span>

      <StyledButton
        buttonSize="default"
        buttonStyle="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cadastrando ..." : "Cadastrar"}
      </StyledButton>
    </FormRegisterStyled>
  );
};
