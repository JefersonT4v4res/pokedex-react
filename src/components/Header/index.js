import React from "react";
import Image from "next/image";

import { StyledHeader } from "./styles";
import ButtonTheme from "../ButtonTheme";

import Logo from "../../assets/images/pokemon_logo.svg";



export default function Header({theme}) {

    return (
       <StyledHeader>
            <Image src={Logo} className="logo" />
            <ButtonTheme />
           
       </StyledHeader>
    )
}