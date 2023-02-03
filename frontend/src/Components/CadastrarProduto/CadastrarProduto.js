import styled from 'styled-components';
import React from 'react';
import axios from 'axios';

const StyledCadastrarProduto = styled.div`
    width: 50vw;
    margin: 5vw 25vw 0 25vw;
`

export const CadastrarProduto = () => {
    const [inputValueNome, setInputValueNome] = React.useState("");
    const [inputValueEstoque, setInputValueEstoque] = React.useState("");
    
    function limparInputs() {
        setInputValueNome("");
        setInputValueEstoque("");
    }

    async function criarProduto() {
        // let nome = inputValueNome;
        // let primeiraLetra = nome.shift;
        // primeiraLetra.toUpperCase();
        // console.log(primeiraLetra + nome);
        await axios.post("http://localhost:3223/create", {name: inputValueNome, estoque: inputValueEstoque});
        limparInputs();
    }

    return (
        <StyledCadastrarProduto>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nome do produto</label>
                    <input 
                        value={inputValueNome}
                        type="text" 
                        className="form-control" 
                        aria-describedby="emailHelp" 
                        onChange={(event) => {
                            setInputValueNome(event.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Quantidade de estoque</label>
                    <input 
                        value={inputValueEstoque}
                        type="number" 
                        className="form-control"  
                        onChange={(event) => {
                            setInputValueEstoque(parseInt(event.target.value))
                        }}
                    />
                </div>
                <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        criarProduto();
                    }}
                >Criar</button>
            </form>
        </StyledCadastrarProduto>
    )
}