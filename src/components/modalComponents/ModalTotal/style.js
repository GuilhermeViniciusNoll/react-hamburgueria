import { styled } from "styled-components";
import { fontParagraphBold } from "../../../styles/globalStyle.js";


export const StyledDiv = styled.div`

    width: 95%;
    height: 120px;
    margin: 10px 10px 0px;
    border-top: solid 2px var(--grey3);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 15px;
    

    div{
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    span{
        ${fontParagraphBold}
        color: var(--grey1);
    }

    .value{
        color: var(--grey2);
    }

    button{
        background-color: var(--grey3);
        color: var(--grey2);
    }

  
`