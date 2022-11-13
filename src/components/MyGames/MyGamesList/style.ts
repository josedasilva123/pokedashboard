import styled from "styled-components";

export const StyledMyGamesList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (max-width: 550px){
        gap: 2rem;
    }
`