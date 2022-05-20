import React from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";

const SignIn = () => {
  const onSubmitHandler = (form, callback) => {
    console.log("Sign In submitted: ", form);
    callback();
  };

  return (
    <SFixedContainer size={275}>
      <Form
        title={"Faça seu Login"}
        formArr={formArr}
        submitBtn={"Login"}
        onSubmit={onSubmitHandler}
        redirect={{
          label: "Não tem uma conta?",
          link: {
            label: "Registre-se",
            to: "/register",
          },
        }}
      />
    </SFixedContainer>
  );
};

const formArr = [
  {
    label: "Nome",
    name: "nome",
    type: "text",
  },
  {
    label: "Senha",
    name: "password",
    type: "password",
  },
];

export default SignIn;
