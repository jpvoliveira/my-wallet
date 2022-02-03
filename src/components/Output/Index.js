import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import TokenContext from "../../contexts/TokenContext";
import dayjs from "dayjs";

export default function Input() {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const { token } = useContext(TokenContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  function handleOutput(e) {
    e.preventDefault();

    const promise = axios.post(
      "http://localhost:5000/saida",
      {
        email: user.email,
        value: value,
        description: description,
        type: "output",
        date: dayjs().format("DD/MM"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    promise.then(() => {
      navigate("/menu");
    });
    promise.catch((err) => {
      console.log(err.data);
    });
  }

  return (
    <Container>
      <p>Nova saída</p>
      <form onSubmit={handleOutput}>
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit"> Salvar saída </button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  background-color: #9254be;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 25px;
  form {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;
  }
  input {
    width: 100%;
    height: 58px;
    border-radius: 5px;
    border: none;
    padding-left: 10px;

    font-size: 20px;
    line-height: 23px;
    color: #000000;
    ::placeholder {
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
  }
  button {
    border: none;
    width: 100%;
    height: 46px;
    background: #a960d6;
    border-radius: 5px;

    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
  p {
    font-weight: bold;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;
