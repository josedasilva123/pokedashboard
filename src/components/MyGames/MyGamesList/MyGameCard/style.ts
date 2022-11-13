import styled from "styled-components";

export const StyledMyGameCard = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    .left{
        display: flex;
        align-items: center;
        gap: 1.4rem;

        img{
            width: 85px;
            height: 85px;
            object-fit: cover;
            border-radius: 20px;
        }
    }
    .right{
        display: flex;
        align-items: center;
        gap: 2rem;

        button{
            min-width: 150px;
        }
    }

    @media (max-width: 900px){
        .right{
            gap: .8rem;
            flex-direction: column;
        }
    }

    @media (max-width: 550px){
        align-items: flex-start;
        flex-direction: column;
        gap: 1rem;

        .right{
            width: 100%;
            align-items: center;

            button{
                width: 100%;
                max-width: 400px;
            }
        }
    }
`