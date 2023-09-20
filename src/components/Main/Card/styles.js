import styled from "styled-components";

export const Container = styled.div`
  width: 18rem;
  height: 26rem;
  margin: 10px;
  display: flex;
  flex-direction: row;
`

export const StyledCard = styled.div`
  width: 16rem;
  height: 24rem;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  padding: 0.5rem;
  margin: 10px;

  .pokemonImage {
    width: 15rem;
    height: 12rem;
    background: gray;
    margin: 10px 0 10px 0;
  }

  .paragraph { 
    margin: 5px 0px;
    }

    button {
      width: 6rem;
      height: 2.5rem;
      margin: 0.5rem 0.37rem;
      color: #000;
      font-family: 'Courier New', Courier, monospace;
      font-size: 1rem;
    }
`;