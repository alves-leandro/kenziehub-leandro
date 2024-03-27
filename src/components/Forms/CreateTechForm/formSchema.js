import * as yup from "yup";

export const techSchema = yup.object().shape({
  title: yup
    .string()
    .required("O nome da tecnologia é obrigatório!"),

  status: yup
    .string()
    .required("Selecione um status!")
});
