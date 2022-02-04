import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [passwordValidate, setPasswordValidate] = useState(true);
  const [emailValidate, setEmailValidate] = useState(true);

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    if (password !== password2) {
      setPasswordValidate(false);
      setPassword("");
      setPassword2("");
      return;
    }
    setPasswordValidate(true);

    const promise = axios.post("https://api-my-wallet-v1.herokuapp.com/cadastro", {
      email: email,
      name: name,
      password: password,
    });
    promise.then((response) => {
      console.log(response);
      navigate("/");
    });
    promise.catch((error) => {
      if (error.response.status === 409) {
        setEmailValidate(false);
        setPasswordValidate(false)
        return;
      }
      alert(error.response.status);
    });
  }

  return (
    <Container>
      <img src="./assets/MyWallet.svg" alt="MyWallet" />
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          placeholder="Confirme a senha"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        />
        {emailValidate ? (
          passwordValidate ? (
            ""
          ) : (
            <span>Senhas não conferem!</span>
          )
        ) : (
          <span>E-mail já cadastrado!</span>
        )}
        <button type="submit"> Cadastrar </button>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Entre agora!</p>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  background-color: #9254be;
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
      color: gray;
    }
  }
  span {
    color: black;
    font-size: 15px;
  }
  button {
    border: none;
    width: 326px;
    height: 46px;
    background: #a960d6;
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
