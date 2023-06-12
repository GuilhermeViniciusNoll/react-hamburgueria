import { styled, css } from "styled-components";
import { fontButton } from "../styles/globalStyle.js"

export const ButtonStyled = styled.button`

    background-color: var(--grey2);
    color: var(--grey3);
    border: none;
    border-radius: 8px;
    padding: 0px 20px;
    ${fontButton}
    
    ${({ model }) => {
        if (model === "medium") {
            return css`
                height: 40px;
            `
        } else {
            return css`
                height: 60px;
            `
        }
        
    }}

    &:hover{
        background-color: var(--colorPrimary);
        color: white;
    }
`