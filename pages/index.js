import React, { useState } from "react";

import GlobalStyle from "../src/styles/global"
import { ThemeProvider } from "styled-components";
import light from "../src/styles/themes/light"
import Header from "../src/components/Header/index";

export default function Page() {
   const [theme, setTheme] = useState(light);

    return (
        <ThemeProvider theme={theme}> 
            <GlobalStyle />
            <Header theme={theme} />
        </ThemeProvider>

    )
}