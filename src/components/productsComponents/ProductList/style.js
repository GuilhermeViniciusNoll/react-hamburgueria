import { styled } from "styled-components";


export const StyledSection = styled.section`
    
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;

    .container{
        width: 100%;
        max-width: 1400px;
        margin: 0px 10px;
    }
    
    ul{
        display: flex;
        gap: 25px;
        flex-direction: row;
        flex-wrap: wrap;
    
        &::-webkit-scrollbar {
            height: 5px;
        }
        
        &::-webkit-scrollbar-track {
            display: none;
        }
        
        &::-webkit-scrollbar-thumb {
            background-color: #27AE60;
            border-radius: 10px;
        }
    }

    @media (max-width: 650px){
        ul{
            flex-wrap: nowrap;
            overflow-y: scroll;
        }
    }
`