import styled from 'styled-components';

const StyledListaDeProdutos = styled.div`
    width: 80vw;
    margin: 5vw 10vw 0 10vw;
`

export const ListaDeProdutos = ({ listaDeProdutos }) => {
    listaDeProdutos.sort((a, b) => { return a.name > b.name ? 1 : -1 }); //Função para orndenar a lista de produtos por ordem alfabetica
    return (
        <StyledListaDeProdutos>
            {listaDeProdutos.map((produto) => {
                return (
                    <div className="card d-inline-block" style={{ width: '18vw', margin: '1vw 1vw 1vw 1vw'}} key={produto.id}>
                        <img src="https://images.unsplash.com/photo-1670071480408-86f09890cbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8YWV1NnJMLWo2ZXd8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{produto.name}</h5>
                            <p className="card-text">{`Estoque = ${produto.estoque}`}</p>
                        </div>
                    </div>
                )
            })}
        </StyledListaDeProdutos>
    )
}