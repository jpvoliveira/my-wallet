import styled from "styled-components";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AddCircleOutline, RemoveCircleOutline } from "react-ionicons";
import UserContext from "../../contexts/UserContext";

export default function Home() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <Container>
      <Header>
        <h1>Olá, {user}</h1>
        <img src="./assets/Logout.svg" alt="" />
      </Header>
      <Extrato>
        Não há registros de <br /> entrada ou saída
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
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 90%;
  height: 72%;
  border-radius: 5px;

  color: #868686;
  font-size: 20px;
  line-height: 23px;
  text-align: center;
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
