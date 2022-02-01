import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/menu")

    // const promise = axios.post(
    //   "http://localhost:5000",
    //   {
    //     email: email,
    //     password: password,
    //   }
    // );
  }

  return (
    <Container>
      <img src="./assets/MyWallet.svg" alt="MyWallet" />
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit"> Entrar </button>
      </form>
      <Link to="/cadastro">
        <p>Primeira vez? Cadastre-se!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: #9254BE;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
    height: 50px;
  }
  form {
    margin-top: 26px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;
  }
  input {
    width: 326px;
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
    width: 326px;
    height: 46px;
    background: #A960D6;
    border-radius: 5px;

    font-weight: bold;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
  p {
    margin-top: 36px;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;
