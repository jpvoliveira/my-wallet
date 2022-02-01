import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>Olá, Fulano</h1>
        <button>sair</button>
      </Header>
      <Extrato>
          Não há registros de entrada ou saída
      </Extrato>
      <Options>
        <Entrada>
            <p>Nova entrada</p>
        </Entrada>
        <Saida>
            <p>Nova saída</p>
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
  margin-bottom: 22px;
  font-size: 26px;
  font-weight: bold;
  line-height: 31px;
  color: #ffffff;
`;
const Extrato = styled.div`
  background-color: #ffffff;
  width: 90%;
  height: 72%;
  border-radius: 5px;
`;
const Options = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 13px;
  width: 90%;
  height: 15%;
`;
const Entrada = styled.div`
  background-color: #A328D6;
  width: 50%;
  height: 100%;
  border-radius: 5px;
`;
const Saida = styled.div`
  background-color: #A328D6;
  width: 50%;
  height: 100%;
  border-radius: 5px;
`;
