import React from 'react';
// import styled from "styled-components";
import axios from 'axios';
import ListaDeProdutos from './Components/ListaDeProdutos';
import { CadastrarProduto } from './Components/CadastrarProduto/CadastrarProduto';

function App() {
  const [MenuOption, setMenuOption] = React.useState(false);
  const [Produtos, setProdutos] = React.useState([]);

  React.useEffect(() => {
    getBanco();
  }, []);

  return (
    <>
      <button
        onClick={() => {
          MenuOption ? (MenuOption === "BotaoCadastrarProduto" ? setMenuOption(false) : setMenuOption("BotaoCadastrarProduto")) : setMenuOption("BotaoCadastrarProduto") //Função para verificar se a pagina ja esta exibindo algo
        }}
        type="button"
        className="btn btn-primary m-1">Cadastrar produto
      </button>
      <button
        onClick={() => {
          getBanco();
          MenuOption ? (MenuOption === "BotaoExibirProduto" ? setMenuOption(false) : setMenuOption("BotaoExibirProduto")) : setMenuOption("BotaoExibirProduto") //Função para verificar se a pagina ja esta exibindo algo
        }}
        type="button"
        className="btn btn-primary m-1">Exibir produtos
      </button>
      <button 
        onClick={() => {
          MenuOption ? (MenuOption === "BotaoDeletarProduto" ? setMenuOption(false) : setMenuOption("BotaoDeletarProduto")) : setMenuOption("BotaoDeletarProduto")
        }}
        type="button" 
        className="btn btn-primary m-1">Deletar produto</button>
      <button
        onClick={() => getBanco()}
        type="button"
        className="btn btn-primary m-1">Atualizar
      </button>
      {MenuOption === "BotaoCadastrarProduto" ? <CadastrarProduto /> : ""}
      {MenuOption === "BotaoExibirProduto" ? <ListaDeProdutos listaDeProdutos={Produtos} /> : ""}
    </>
  );

  async function getBanco() {
    const response = await axios.get("http://localhost:3223/read");
    setProdutos(response.data);
  }

}

export default App;