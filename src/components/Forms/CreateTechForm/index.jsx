import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, SelectTech } from "../../Input";
import { StyledButton } from "../../../styles/Button";

import { FormLoginStyled } from "./style";
import { TechContext } from "../../../contexts/TechContext";
import { techSchema } from "./formSchema";
import { UserContext } from "../../../contexts/UserContext";

export const CreateTechForm = () => {
  const { createTechs, setModal } = useContext(TechContext);
  const { loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(techSchema),
  });

  const onSubmit = (data) => {
    createTechs(data);
    setModal(false);
    reset();
  };

  return (
    <FormLoginStyled onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        label="Nome"
        type="text"
        placeholder="Digite o nome da tecnologia aqui"
        register={register("title")}
        disabled={loading}
      />
      <span>{errors.title?.message}</span>

      <SelectTech
        label="Selecionar ststus"
        id="course_module"
        register={register("status")}
        disabled={loading}
      />
      <span>{errors.status?.message}</span>

      <StyledButton
        buttonSize="default"
        buttonStyle="primary"
        type="submit"
        disabled={loading}
      >
        {loading ? "Cadastrando ..." : "Cadastrar Tecnologia"}
      </StyledButton>
    </FormLoginStyled>
  );
};
