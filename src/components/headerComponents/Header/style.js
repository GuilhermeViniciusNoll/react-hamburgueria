import { styled } from "styled-components"

export const StyledHeader = styled.header`

    width: 100%;
    height:auto;
    min-height: 80px;
    background-color: var(--grey4);
    display: flex;
    justify-content: center;
    align-items: center;

    .subContainer{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        gap: 5px;
    }

    .container {
        width: 100%;
        max-width: 1400px;
        margin: 20px 10px 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
    }

    @media(max-width: 640px){
        .container{
            flex-wrap: wrap;
            gap: 25px;
        }
    }
`