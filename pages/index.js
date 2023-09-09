import React, { useState } from "react";

import GlobalStyle from "../src/styles/global"
import { ThemeProvider } from "styled-components";
import light from "../src/styles/themes/light"
import Header from "../src/components/Header/index";
import Main from "../src/components/Main/index";

export default function Home() {
   const [theme, setTheme] = useState(light);

    return (
        <ThemeProvider theme={theme}> 
            <GlobalStyle />
            <Header theme={theme} />
            <Main />
        </ThemeProvider>

    )
}