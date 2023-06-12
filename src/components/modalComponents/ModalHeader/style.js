import { styled } from "styled-components";
import { fontH2 } from "../../../styles/globalStyle.js"

export const StyleHeaderModal = styled.header`

    background-color: var(--colorPrimary);
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px ;
    height: auto;
    min-height: 54px;
    margin-bottom: 10px;

    h2{
        ${fontH2}
        color: white;
    }

    button{
        background-color: transparent;
        font-size: 17px;
        color: #FFFFFF70;
    }
`