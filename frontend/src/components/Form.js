import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  width: 100%;
  max-width: 2000px;
  gap: 10px;
  flex-wrap: wrap;
  background-color: orange;
  padding: 15px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: blue;
  color: white;
  height: 42px;
`;


const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.email.value = onEdit.email;
      user.fone.value = onEdit.fone;
      user.data_contratacao.value = onEdit.data_contratacao;
      user.cargo.value = onEdit.cargo;
      user.gerente.value = onEdit.gerente;
      user.salario.value = onEdit.salario;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_contratacao.value ||
      !user.cargo.value ||
      !user.gerente.value ||
      !user.salario.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_contratacao: user.data_contratacao.value,
          cargo: user.cargo.value,
          gerente: user.gerente.value,
          salario: user.salario.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          email: user.email.value,
          fone: user.fone.value,
          data_contratacao: user.data_contratacao.value,
          cargo: user.cargo.value,
          gerente: user.gerente.value,
          salario: user.salario.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.email.value = "";
    user.fone.value = "";
    user.data_contratacao.value = "";
    user.cargo.value = "";
    user.gerente.value = "";
    user.salario.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email" type="email" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="fone" />
      </InputArea>
      <InputArea>
        <Label>Dta. Contrato</Label>
        <Input name="data_contratacao" type="date" />
      </InputArea>
      <InputArea>
        <Label>Cargo</Label>
        <Input name="cargo" type="text" />
      </InputArea>
      <InputArea>
        <Label>Gerente</Label>
        <Input name="gerente" type="text" />
      </InputArea>
      <InputArea>
        <Label>Salário</Label>
        <Input name="salario" type="number" />
      </InputArea>


      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;