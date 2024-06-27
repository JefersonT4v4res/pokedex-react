import React from "react";
import Image from "next/image";

import BtnBurgerMenu from "../ButtonMenuHamburguer";
import { StyledHeader } from "./styles";


import Logo from "../../assets/images/pokemon_logo.svg";



export default function Header({theme}) {

    return (
       <StyledHeader>
        <Image src={Logo} className="logo" />
        <BtnBurgerMenu/>
           
       </StyledHeader>
    )
}