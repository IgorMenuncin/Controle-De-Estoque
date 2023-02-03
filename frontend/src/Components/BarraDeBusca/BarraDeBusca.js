import styled from "styled-components"

const StyledBarraDeBusca = styled.div`
    width: 50%;
    margin: 0 25% 0 25%;
`

export const BarraDeBusca = ({valorPesquisa, alterarValorPesquisa}) => {
    let valorDaBusca = valorPesquisa;
    const setValorDaBusca = alterarValorPesquisa;
    return (
        <StyledBarraDeBusca>
            <div className="d-flex" role="search">
                <input 
                    onChange={(event) => {
                        setValorDaBusca(event.target.value);
                    }}  
                    value={valorDaBusca}
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search" 
                />
            </div>
        </StyledBarraDeBusca>
    )
}