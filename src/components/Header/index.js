import React from "react";
import Image from "next/image";
import { StyledHeader } from "./styles";
import Logo from "../../assets/images/pokemon_logo.svg";

export default function Header({theme}) {

    return (
       <StyledHeader>
            <Image src={Logo} className="Logo" />
            <div className="container_SwitchTheme">
                <div className="rectangle red"> </div>
                    <div className="rectangle gray"> 
                        <div className="themes icon" id="sun"> </div>
                        <div className="themes icon" id="moon"> </div>
                        <div className="themes icon" id="classic"> </div>
                        <div className="themes icon" id="ghost"> </div>
                    </div>
                <div className="rectangle white"> </div>
            </div>
       </StyledHeader>
    )
}