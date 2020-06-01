import styled from 'styled-components'


export const GridContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 90vw 1fr;
    grid-template-rows: 5vh 1fr 5vh;
    height: 100vh;
    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr 90vw 1fr;
    }
`

export const Grid = styled.div`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    column-count: 1;
    column-gap: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;


    @media ${props => props.theme.breakpoints.tablet} {
        column-count: 1;
    }
    @media ${props => props.theme.breakpoints.mobile} {
        column-count: 1;
    }
    
`

export const Item = styled.div`
    display: inline-block; 
    
    

    width: 100%;
    

`
 