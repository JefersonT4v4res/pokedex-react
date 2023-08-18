import styled from "styled-components"

export const StyledBtnThemeContainer = styled.div`
    
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .lid, .base {
        width: 2.5rem;
        height: 2.5rem;
        z-index: 3;
    }

    .containerThemes {
        box-sizing: border-box;
        width: 2.1rem;
        height: 4.1rem;
        background: #434A54;
        z-index: 2;
        position: absolute;
        top: 16px;
        border-radius: 15px;
        border: 0.1px solid #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        transition: height 0.5s;
    }


    .containerThemes:hover {
        height: 11rem;
    }

    .themes {
        z-index: 3;
        width: 1.5rem;
        height: 1.7rem;
        display: none;
        transition: display .8s ease-in-out;
    }

    .containerThemes:hover .themes {
        display: flex;
    }

    #sun {
        display: flex ;
    }

    .base {
        margin-top: 5px;
        position: relative;
        top: 7px;
        transition: top 0.5s;
    }

    .containerThemes:hover + .base {
       top: 118px;
    }

`