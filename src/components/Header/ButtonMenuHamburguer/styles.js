import styled from "styled-components"

export const StyledBtnBurgerMenu = styled.div`
#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: .3s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: rgb(253, 255, 243);
  border-radius: 5px;
  transition-duration: .3s;
}


#checkbox:checked + .toggle #bar2 {
  transform: translateY(14px) rotate(60deg);
  margin-left: 0;
  transform-origin: right;
  transition-duration: .3s;
  z-index: 2;
}

#checkbox:checked + .toggle #bar1 {
  transform: translateY(28px) rotate(-60deg);
  transition-duration: .3s;
  transform-origin: left;
  z-index: 1;
}

#checkbox:checked + .toggle {
  transform: rotate(-90deg);
}


`