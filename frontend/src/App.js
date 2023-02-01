import React from 'react';
// import styled from "styled-components";
import axios from 'axios';
import ListaDeProdutos from './Components/ListaDeProdutos';
import { CadastrarProduto } from './Components/CadastrarProduto/CadastrarProduto';

function App() {
  const [Produtos, setProdutos] = React.useState([]);
  const [BotaoExibir, setBotaoExibir] = React.useState(false);
  const [BotaoCadastrar, setBotaoCadastrar] = React.useState(false);
  // const [BotaoDeletar, setBotaoDeletar] = React.useState(false);

  React.useEffect(() => {
    getBanco();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setBotaoCadastrar(!BotaoCadastrar)
        }}
        type="button"
        className="btn btn-primary m-1">Cadastrar produto
      </button>
      <button
        onClick={() => {
          setBotaoExibir(!BotaoExibir)
        }}
        type="button"
        className="btn btn-primary m-1">Exibir produtos
      </button>
      <button 
        type="button" 
        className="btn btn-primary m-1">Deletar produto</button>
      <button
        onClick={() => getBanco()}
        type="button"
        className="btn btn-primary m-1">Atualizar
      </button>
      {BotaoExibir ? <ListaDeProdutos listaDeProdutos={Produtos} /> : ""} 
      {BotaoCadastrar ? <CadastrarProduto /> : ""}
    </>
  );

  async function getBanco() {
    const response = await axios.get("http://localhost:3223/read");
    setProdutos(response.data);
  }
}

export default App;