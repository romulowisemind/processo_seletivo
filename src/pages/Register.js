import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";

const Register = () => {
  const onSubmitHandler = (form, callback) => {
    console.log("Register Submitted:", form);
    callback();
  };

  return (
    <SFixedContainer size={275}>
      <Form
        title={"Cadastro"}
        formArr={formArr}
        submitBtn={"Registrar"}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "Já tem uma conta?",
          link: {
            label: "Clique aqui",
            to: "/signin",
          },
        }}
      />
    </SFixedContainer>
  );
};

const formArr = [
  {
    label: "Nome",
    name: "name",
    type: "text",
  },

  {
    label: "Senha",
    name: "password",
    type: "password",
  },
  {
    label: "Confirme sua Senha",
    name: "confirmPassword",
    type: "password",
  },
];

export default Register;
