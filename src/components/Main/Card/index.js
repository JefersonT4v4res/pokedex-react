import React, { useEffect, useState } from 'react';
import { StyledCard, Container } from "./styles";
import { CatchPokeList } from '../../../utils/Api/api';

export default function Card() {
    // const [data, setData] = useState([]);
      
    // useEffect(() => {
    //     async function fetchData() {
    //     try {
    //         // Chame CatchPokeList passando as funções setData e setLoading
    //         const response = await CatchPokeList(setData);
    //         setData(response); // Define os dados da API no estado
    //     } catch (error) {
    //         console.error('Erro ao buscar dados da API:', error);
    //     }
    //     }
    
    //     fetchData();
    // }, []);

    const pokemons = [
        {
            "id": "001",
            "name": "bulbasaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            "types": [
                {
                    "typeF": "grass"
                }
            ]     
        },
        {
            "id": "002",
            "name": "ivysaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            "types": [
                {
                    "typeF": "grass",
                    "typeS": "poison"
                }
            ]     
        },
        {
            "id": "003",
            "name": "venusaur",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            "types": [
                {
                    "typeF": "grass",
                    "typeS": "poison"
                }
            ]     
        },
        {
            "id": "004",
            "name": "charmander",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            "types": [
                {
                    "typeF": "fire"
                }
            ]     
        },
        {
            "id": "006",
            "name": "charmeleon",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            "types": [
                {
                    "typeF": "fire"
                }
            ]     
        },
        {
            "id": "007",
            "name": "charizard",
            "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            "types": [
                {
                    "typeF": "fire",
                    "typeS": "flying"
                }
            ]     
        }
    ]


    return (

        <Container>
            {pokemons.map(pokemon => {
                    return (
                        <StyledCard>
                            <img src={pokemon.image} alt="Imagem do Pokémon" className="pokemonImage" />
                            <p className="paragraph">#{pokemon.id}</p>
                            <p className="paragraph">{pokemon.name}</p>
                                {pokemon.types.map((type, index) => (
                                    <div key={index}>
                                        <button className="button">{type.typeF}</button>
                                        {type.typeS && <button className="button">{type.typeS}</button>}
                                    </div>
                                    ))}
                        </StyledCard>
                    )
                })}
            
        </Container>
    )
}
