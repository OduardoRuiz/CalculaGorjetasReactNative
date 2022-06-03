import styled from 'styled-components/native';
import React from 'react';

const Title = styled.Text`
font-size: 25px;
color: red;
margin-top: 50px;
`;

const Page = styled.View`
flex: 1;
align-items: center;
`;
const Input = styled.TextInput`
height: 40px;
font-size: 18px
background-color: #eeeeee;
width: 80%;
margin-top: 10px
padding: 10px

`;
const Button = styled.Button`
margin-top: 10px;
margin: 10px;
`;
const BtnArea = styled.View`
flex-direction : row;
margin: 20px
`;

const ResultadoArea = styled.View`
width: 100%;
margin-top: 30px;
background-color: #c6c6c6;
padding: 20px;
justify-content: center;
align-items: center;
`;

const ResultadoTextTitulo = styled.Text`
font-size: 18px;
font-wight: bold;
margin-top: 15px;
`;

const ResultadoTextValor = styled.Text`
font-size: 15px;
margin-top: 15px;
`;

export default function App() {
  const [conta, setConta] = React.useState("0");
  const [pct, setPct] = React.useState(10);
  const [gorjeta, setGorjeta] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    calculaGorjeta();
  }, [conta, pct])


  function calculaGorjeta() {
    const calGorjeta = parseFloat(conta) * pct / 100
    setGorjeta(calGorjeta);
    setTotal(parseFloat(conta) + calGorjeta);
  }

  function mudaValor(valor) {
    if (isNaN(parseFloat(valor))) {
      setConta(0);
    } else {
      setConta(valor);
    }
  };

  return (
    <Page>
      <Title>Calculadora de Gorjetas</Title>
      <Input
        placeholder="Quanto deu a conta?"
        value={conta}
        onChangeText={mudaValor}
        keyboardType="numeric"
      />
      <BtnArea>

        <Button title="10%" onPress={() => setPct(10)} />
        <Button title="15%" onPress={() => setPct(15)} />
        <Button title="18%" onPress={() => setPct(18)} />

      </BtnArea>
      <Title>{pct}</Title>

      <ResultadoArea>
        <ResultadoTextTitulo>Valor da Conta</ResultadoTextTitulo>
        <ResultadoTextValor>R${parseFloat(conta).toFixed(2)}</ResultadoTextValor>

        <ResultadoTextTitulo>Valor da Gorjeta</ResultadoTextTitulo>
        <ResultadoTextValor>R$ {gorjeta.toFixed(2)} </ResultadoTextValor>
        <ResultadoTextValor>R$ {total.toFixed(2)}</ResultadoTextValor>
      </ResultadoArea>


    </Page>
  );
}