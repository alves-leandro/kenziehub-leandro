import React from "react";
import { FieldsetStyled } from "./style";

export const Input = ({ id, label, type, placeholder, register, disabled, title, status }) => {
  return (
    <FieldsetStyled>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register}
        disabled={disabled}
        defaultValue={ title? title : status}
      />
    </FieldsetStyled>
  );
};

export const Select = ({ label, register, disabled }) => {
  return (
    <FieldsetStyled>
      <label>{label}</label>
      <select {...register} disabled={disabled} >
        <option value="">Selecione o módulo</option>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </select>
    </FieldsetStyled>
  );
};

export const SelectTech = ({ label, register, disabled, title, status, enableButton  }) => {
  return (
    <FieldsetStyled>
      <label>{label}</label>
      <select {...register} disabled={disabled} defaultValue={ title? title : status} onChange={() => enableButton()}>
        <option value="">Selecione o módulo</option>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediário">Intermediário</option>
        <option value="Avançado">Avançado</option>
      </select>
    </FieldsetStyled>
  );
};
