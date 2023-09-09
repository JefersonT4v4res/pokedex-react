import { StyledCard } from "./styles";

export default function Card() {
    return (
        <StyledCard >
           <div className="Rectangle"> </div>
           <p className="paragraph">#0001</p>
           <p className="paragraph">Name Pokemon</p>
           <div>
           <button className="button">Type 1</button>
           <button className="button">Type 2</button>

           </div>
        </StyledCard>
    )
}