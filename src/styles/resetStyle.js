import { createGlobalStyle } from "styled-components";


export const ResetStyle = createGlobalStyle`

*{
    font-family: 'Inter', sans-serif;
    margin: 0px;
    padding: 0px;
    border: 0px;
}

body::-webkit-scrollbar {
  width: 5px;
}

body::-webkit-scrollbar-track {
    display: none;
}

body::-webkit-scrollbar-thumb {
  background-color: #27AE60;
  border-radius: 10px;       
}

`