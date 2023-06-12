import { styled } from "styled-components";

export const StyledUlModal = styled.ul`

    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    max-height: 180px;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        display: none;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #27AE60;
        border-radius: 10px;       
    }
`