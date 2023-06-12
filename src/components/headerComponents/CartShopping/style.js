import { styled } from "styled-components"

export const StyleDiv = styled.div`

    width: 40px;
    height: 40px;
    position: relative;

    p{
        align-self: end;
        font-size: var(--size3);
        font-weight: var(--fontWeight1);
        background-color: var(--colorPrimary);
        width: 18px;
        height: 24px;
        border-radius: 7px;
        z-index: 2;
        position: absolute;
        left: 45%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 25px;
        height: 25px;
        z-index: 1;
        position: absolute;
        top: 35%;
    }
`