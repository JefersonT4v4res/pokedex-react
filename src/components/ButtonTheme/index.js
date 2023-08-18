import Image from "next/image";
import { StyledBtnThemeContainer } from "./styles";

import Lid from "../../assets/images/lid_Pokeball.svg";
import Base from "../../assets/images/base_Pokeball.svg";
import Sun from "../../assets/images/sun.svg";
import Moon from "../../assets/images/moon.svg";
import Classic from "../../assets/images/classic.svg";
import Ghost from "../../assets/images/ghost.svg";

export default function ButtonTheme() {
    return (
        <StyledBtnThemeContainer >
            <Image src={Lid} className="lid" />
                <div className="containerThemes">
                <Image src={Sun} className="themes icon"  id="sun" />
                <Image src={Moon} className="themes icon" id="moon" />
                <Image src={Classic} className="themes icon" id="classic" />
                <Image src={Ghost} className="themes icon" id="ghost" />
                </div>
            <Image src={Base} className="base" />
        </StyledBtnThemeContainer>
    )
}