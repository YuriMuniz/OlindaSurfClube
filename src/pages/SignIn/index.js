import React from "react";

import { useDispatch, useSelector } from "react-redux";

import { FaSpinner } from "react-icons/fa";

import { Form, Input } from "@rocketseat/unform";

import * as Yup from "yup";

import { signInRequest } from "../../store/modules/auth/actions";

import logo from "../../assets/logo.png";

import { Images, Container } from "./styles";

export default function SignIn() {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Insira um e-mail válido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatória"),
  });

  // const loading = false;
  console.log(useSelector((state) => state.auth));
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Container>
      <Images>
        <img src={logo} style={{ width: "50%" }} alt="Olinda Surf Clube" />
      </Images>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua senha" />

        {!loading && <button type="submit">Acessar</button>}
        {loading && (
          <button type="submit" disabled="disabled">
            <FaSpinner id="spinner" size={20} />
          </button>
        )}
      </Form>
    </Container>
  );
}
