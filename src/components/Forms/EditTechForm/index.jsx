import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input, SelectTech } from "../../Input";
import { StyledButton } from "../../../styles/Button";

import { FormLoginStyled } from "./style";
import { TechContext } from "../../../contexts/TechContext";
import { editSchema } from "./formSchema";
import { UserContext } from "../../../contexts/UserContext";
import { useState } from "react";

export const EditTechForm = (props) => {
  const [change, setChange] = useState(false)

  const { techData } = props;

  const { loading } = useContext(UserContext);
  const { setModalEdit, editTech, deleteTech } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(editSchema),
  });

  const onSubmit = (data) => {
    editTech(data);
    setModalEdit(false);
    reset();
  };

  const enableButton = () => {
    setChange(true)
  }

  return (
    <>
      <FormLoginStyled onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          label="Nome"
          type="text"
          placeholder="Digite o nome da tecnologia aqui"
          register={register("title")}
          disabled={true}
          title={techData?.title}
        />
        <span>{errors.title?.message}</span>

        <SelectTech
          label="Selecionar ststus"
          id="course_module"
          register={register("status")}
          disabled={loading}
          status={techData?.status}
          enableButton={enableButton}
        />
        <span>{errors.status?.message}</span>

        <div className="EditModalButtons">
          <StyledButton
            buttonSize="default"
            buttonStyle={!change ? "primary-negative" : "primary"}
            type="submit"
            disabled={!change ? true : false}           
          >
            {loading ? "Salvando ..." : "Salvar alterações"}
          </StyledButton>

          <StyledButton
            buttonSize="medium"
            buttonStyle="disabled"
            type="button"
            disabled={loading}
            onClick={() => {
              deleteTech(techData?.id);
              setModalEdit(false);
            }}
          >
            {loading ? "Excluindo ..." : "Excluir"}
          </StyledButton>
        </div>
      </FormLoginStyled>
    </>
  );
};
