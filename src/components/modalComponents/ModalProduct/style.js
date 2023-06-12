import { styled } from "styled-components";
import { fontH2, fontParagraphBold } from "../../../styles/globalStyle.js"

export const StyledLi = styled.li`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-height: 80px;
    margin: 10px 10px ;
    align-items: start;

    .container{
        display: flex;
        flex-direction: row;
        gap: 5px;
    }

    .container > div > img{
       width: 50px;
       height: 50px;
    }

    .divImg{
        background-color: var(--grey3);
        width: 82px;
        height: 80px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .subContainerItem{
        height: 70px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h2{
        ${fontH2}
    }

    p{
        ${fontParagraphBold}
        color: var(--colorPrimary);
    }

    button{
        background-color: transparent;
    }
`