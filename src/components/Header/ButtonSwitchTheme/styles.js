import styled from "styled-components"

export const StyledBtnThemeContainer = styled.div`
    
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    .lid, .base {
        width: 2.5rem;
        height: 1.5rem;
        z-index: 3;
    }

    .containerThemes {
        box-sizing: border-box;
        width: 2.1rem;
        height: 4.1rem;
        background: #252525;
        z-index: 2;
        position: absolute;
        top: 9px;
        border-radius: 15px;
        border: 0.1px solid #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.3rem;
        transition: height .5s ease-in-out;
    }

    .containerThemes:hover  {
        height: 11rem;
    }

    .themes {
        z-index: 3;
        width: 1.5rem;
        height: 1.7rem;
        opacity: 0;
        overflow: hidden;
        display: none;
        transition: opacity 1.5s ease-in-out;
    }

    .containerThemes:hover .themes {
        opacity: 1;
        display: flex;
    }

    .active {
        display: flex;
        opacity: 1;
    }

    .base {
        margin-top: 5px;
        position: relative;
        top: 22px;
        transition: top 0.5s ease-in-out;
    }

    .containerThemes:hover + .base {
       top: 130px;
    }

`