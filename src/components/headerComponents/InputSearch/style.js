import { styled } from "styled-components";
import { fontPlaceholder } from "../../../styles/globalStyle.js"

export const StyleDiv = styled.div`

    width: 365px;
    min-width: 365px;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 2px var(--grey3);
    border-radius: 8px;
    padding: 0px 10px;
    background-color: white;

    &:hover{
        border: solid 2px var(--grey1);
    }

    input{
        width:100%;
        height: 100%;
        ${fontPlaceholder}
        padding: 0px 10px;
    }
    
    input:focus{
        outline: 0;
    }

    input::placeholder{
        ${fontPlaceholder}
        color: var(--grey3);
    }

    button{
        height: 40px;
        width: 53px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        background-color: var(--colorPrimary);
    }

    button > img{
        width: 25px;
        height: 25px;
    }    

    @media(max-width: 640px){
        width: 100%;
        min-width: 0px;
    }
`