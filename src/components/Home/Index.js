import axios from "axios";
import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import UserContext from "../../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [extrato, setExtrato] = useState([]);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/menu", {
      headers: {
        email: user.email,
      },
    });
    promise.then((response) => {
      setExtrato(response.data);
    });
    promise.catch((error) => console.log(error.response));
  }, []);

  return (
    <Container>
      <Header>
        <h1>Olá, {user.name}</h1>
        <img
          src="./assets/Logout.svg"
          alt="sair"
          onClick={() => navigate("/")}
        />
      </Header>
      <Extrato extrato={extrato}>
        <div>
          {extrato.length > 0 ? (
            extrato.map((item) => <Item dados={item} />)
          ) : (
            <p>
              Não há registros de <br /> entrada ou saída
            </p>
          )}
        </div>
        {extrato.length > 0 && (
          <Saldo>
            SALDO<span>{saldo}</span>
          </Saldo>
        )}
      </Extrato>
      <Options>
        <Entrada onClick={() => navigate("/entrada")}>
          <AddCircleOutline color={"#ffffff"} height="30px" width="30px" />
          <p>
            Nova
            <br />
            entrada
          </p>
        </Entrada>
        <Saida onClick={() => navigate("/saida")}>
          <RemoveCircleOutline color={"#ffffff"} height="30px" width="30px" />
          <p>
            Nova
            <br />
            saída
          </p>
        </Saida>
      </Options>
    </Container>
  );
}

function Item({ dados }) {
  return (
    <Linha type={dados.type}>
      <div>
        {dados.date}
        <span>{dados.description}</span>
      </div>
      <p>{dados.value}</p>
    </Linha>
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
`;
const Header = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 26px;
  font-weight: bold;
  line-height: 31px;
  color: #ffffff;
`;

const Extrato = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.extrato.length < 1
      ? "justify-content: center;"
      : "justify-content: space-between;"}
  background-color: #ffffff;
  width: 90%;
  height: 72%;
  border-radius: 5px;
  padding: 20px 10px;

  color: #868686;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
const Linha = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 19px;
  margin-bottom: 8px;
  span {
    margin-left: 10px;
    color: black;
  }
  p {
    ${(props) => (props.type === "input" ? "color: green" : "color: red")};
  }
`;
const Saldo = styled.footer`
  display: flex;
  justify-content: space-between;

  color: black;
  font-weight: bold;
  font-size: 17px;
  line-height: 20px;
  span {
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
  }
`;
const Options = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 13px;
  width: 90%;
  height: 15%;
`;
const Entrada = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #a960d6;
  width: 50%;
  height: 100%;
  border-radius: 5px;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;
const Saida = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  background-color: #a960d6;
  width: 50%;
  height: 100%;
  border-radius: 5px;

  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  line-height: 20px;
`;
