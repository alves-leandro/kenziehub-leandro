import * as yup from "yup";

export const editSchema = yup.object().shape({
  title: yup
    .string(),

  status: yup
    .string()
    .required("Selecione um status!")
});
