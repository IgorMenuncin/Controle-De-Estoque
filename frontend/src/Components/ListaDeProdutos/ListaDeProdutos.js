import styled from 'styled-components';
import { BarraDeBusca } from '../BarraDeBusca/BarraDeBusca';
import React from 'react';

const StyledListaDeProdutos = styled.div`
    width: 80vw;
    margin: 5vw 10vw 0 10vw;
`

export const ListaDeProdutos = ({ listaDeProdutos }) => {
    listaDeProdutos.sort((a, b) => { return a.name > b.name ? 1 : -1 }); //Função para orndenar a lista de produtos por ordem alfabetica
    const [valorPesquisa, setValorPesquisa] = React.useState(""); //Estado criado para armazenar o valor da barra de pesquisa para entao usa-lo para filtrar os itens
    return (
        <StyledListaDeProdutos>
            <BarraDeBusca valorPesquisa={valorPesquisa} alterarValorPesquisa={setValorPesquisa} /> {/*Componente barra de pesquisa que receberá o valor da pesquisa e ira altera-l*/}

            {listaDeProdutos
                .filter((produto) => {
                    const produtoNameNormalized = produto.name.toLowerCase(); //Função para deixar todos os nomes de produtos minusculos, afim de letras maiusculas e minusculas nao interferirem na busca
                    const valorPesquisaNormalized = valorPesquisa.toLowerCase(); //Função para deixar o valor da pesquisa em minusculo, afim de letras maiusculas e minusculas nao interferirem na busca
                    return produtoNameNormalized.includes(valorPesquisaNormalized)}) //Função para filtrar a lista de itens com base no valor da pesquisa
                .map((produto) => { // Função que percorre a lista de itens e criar um card para cada produto
                    return (
                        <div className="card d-inline-block" style={{ width: '18vw', margin: '1vw 1vw 1vw 1vw' }} key={produto.id}>
                            <img src="https://images.unsplash.com/photo-1670071480408-86f09890cbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{produto.name}</h5>
                                <p className="card-text">{`Estoque = ${produto.estoque}`}</p>
                            </div>
                        </div>
                    )
                })
            }
        </StyledListaDeProdutos>
    )
}