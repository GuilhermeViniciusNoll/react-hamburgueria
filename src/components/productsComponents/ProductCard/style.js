import { styled } from "styled-components";
import { fontH2, fontParagraphBold, fontParagraph } from "../../../styles/globalStyle.js"

export const StyledLi = styled.li`

    width: 300px;
    min-width: 300px;
    height: 346px;
    border: 2px solid var(--grey3) ;
    border-radius: 5px;
    list-style: none;

    .firstDiv{
        background-color: var(--grey3);
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .firstDiv > img{
        padding-bottom: 35px;
    }

    &:hover{
        border:2px solid var(--colorPrimary);
    }

    &:hover  button{
        background-color: var(--colorPrimary);
        color: white;
    }

    .secondDiv{
        width: 100%;
        height: 50%;
        padding-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
    
    h2{
        ${fontH2}
    }

    p{
        ${fontParagraph}
    }

    span{
        ${fontParagraphBold}
        color: var(--colorPrimary);
    }

    button{
        width: 106px;
    }
`