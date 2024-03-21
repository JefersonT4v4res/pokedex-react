import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #C1C1C1;
}

p {
     background-color: #cacaca;
}

ul {
    list-style: none;
}

a,
a:focus,
a:active {
    text-decoration: none;
    color: #000;
}
`

export default GlobalStyle;