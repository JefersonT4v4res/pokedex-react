import React from "react";
import Image from "next/image";

import { StyledHeader } from "./styles";
import BtnBurgerMenu from "./ButtonMenuHamburguer";

import Logo from "../../assets/images/pokemon_logo.svg";



export default function Header({theme}) {

    return (
       <StyledHeader>
        <Image src={Logo} className="logo" />
        <BtnBurgerMenu/>
           
       </StyledHeader>
    )
}