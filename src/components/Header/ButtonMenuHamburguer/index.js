import React from "react";

import { StyledBtnBurgerMenu } from "./styles";

export default function BtnBurgerMenu({theme}) {

    return (
       <StyledBtnBurgerMenu>
            <input id="checkbox" type="checkbox" />
            <label className="toggle" for="checkbox">
                <div id="bar1" className="bars"></div>
                <div id="bar2" className="bars"></div>
                <div id="bar3" className="bars"></div>
            </label>
           
       </StyledBtnBurgerMenu>
    )
}