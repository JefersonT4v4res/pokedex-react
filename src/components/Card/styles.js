import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

`
export const Card = styled.div`
  width: 16rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  padding: 0.5rem;
  margin: 2rem auto;
  border-radius: 3px;
  box-shadow: 5px 6px 8px 3px rgba(0, 0, 0, .25);
`
  export const Image = styled.img` 
    width: 15rem;
    height: 12rem;
    background: #D9D9D9;
    margin: 10px 0 10px 0;
  ` 	

  export const Paragraph = styled.p`
    margin: 5px 0px;
  `

  export const ContainerType = styled.div`
      width: 100%;
      height: 3rem;
      margin: 0.5rem auto;
      padding: 8px;
      display: flex;
      justify-content: space-between;
  `
  export const PokemonType = styled.p`
      width: 6rem;
      height: 2.5rem;
      font-size: 1rem;
      text-align: center;
      padding: 10px;
      border-radius: 22px;
      background-color: yellowgreen
`