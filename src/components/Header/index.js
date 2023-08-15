import React from "react";
import { StyledHeader } from "./styles";
import Logo from "../../public/images/image 5.png";


export default function Header() {
    return (
       <StyledHeader>
        <Logo />
            <div class="container_SwitchTheme">
                <div class="rectangle red"> </div>
                    <div class="rectangle gray"> 
                        <div class="themes icon" id="sun"> </div>
                        <div class="themes icon" id="moon"> </div>
                        <div class="themes icon" id="classic"> </div>
                        <div class="themes icon" id="ghost"> </div>
                    </div>
                <div class="rectangle white"> </div>
            </div>
       </StyledHeader>
    )
}