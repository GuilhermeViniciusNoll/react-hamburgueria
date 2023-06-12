import { styled } from "styled-components";

export const StyledDiv = styled.div`

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.3);

    .subContainer{
        width: 100%;
        max-width: 500px;
        height: 390px;
        margin: 0px 10px;
        background-color: white;
    }
`