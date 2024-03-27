import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório!")
    .min(3, "O nome precisa ter ao menos 3 caracteres")
    .max(200, "número limite de caracteres atingido"),

  email: yup
    .string()
    .required("O e-mail é obrigatório!")
    .email("é necessário fornecer um e-mail válido"),

  bio: yup.string().required("A bio é obrigatória"),

  contact: yup.string().required("Digite um contato pessoal"),
  
  password: yup
    .string()
    .required("defina uma senha!")
    .matches(/(?=.*?[A-Z])/, "É necessário ao menos uma letra maiúscula")
    .matches(/(?=.*?[a-z])/, "É necessário ao menos uma letra minúscula")
    .matches(/(?=.*?[0-9])/, "É necessário ao menos um número")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário ao menos um caractere especial"
    )
    .matches(/.{8,}/, "É necessário que tenha no minimo 8 caracteres."),

  checkPassword: yup
    .string()
    .required("A confirmação é obrigatória!")
    .oneOf([yup.ref("password")], "As senhas precisam ser iguais"),

    course_module: yup.string().required("Selecione um módulo"),
});
