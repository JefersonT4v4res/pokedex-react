import Image from "next/image";
import { StyledBtnTheme } from "./styles";

import Tampa from "../../assets/images/TAMPA DE CIMA.svg";
import Base from "../../assets/images/TAMPA DE BAIXO.svg";

export default function ButtonTheme() {
    return (
        <StyledBtnTheme >
            <Image src={Tampa} className="Tampa" />
                <div className="rectangle gray"> 
                    <div className="themes icon" id="sun"> </div>
                    <div className="themes icon" id="moon"> </div>
                    <div className="themes icon" id="classic"> </div>
                    <div className="themes icon" id="ghost"> </div>
                </div>
            <Image src={Base} className="Base" />
        </StyledBtnTheme>
    )
}