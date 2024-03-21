import React from "react";

import { StyledBtnBurgerMenu } from "./styles";

export default function BtnBurgerMenu({theme}) {

    return (
       <StyledBtnBurgerMenu>
            <input id="checkbox" type="checkbox" />
            <label class="toggle" for="checkbox">
                <div id="bar1" class="bars"></div>
                <div id="bar2" class="bars"></div>
                <div id="bar3" class="bars"></div>
            </label>
           
       </StyledBtnBurgerMenu>
    )
}