import React, { useEffect, useState } from 'react';
import * as styled from "./styles";
import { CatchPokeList } from '../../utils/Api/api';

export default function Card() {
    const [pokemon, setPokemon] = useState([]);
    const [quantityDisplayed, setQuantityDisplayed] =useState(10);
      
    useEffect(() => {

        async function fetchData() {
        try {
            // Chame CatchPokeList
            const response = await CatchPokeList();
            setPokemon(response);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
        }
    
        fetchData();
    }, []);
    
    return (
        <styled.Container>
            {pokemon.slice(0, quantityDisplayed).map((pokeData) => (
            <styled.Card key={pokeData.id}>
                <styled.Image src={pokeData.image} alt={`Imagem do Pokémon ${pokeData.name}`} className="pokemonImage" />
                <styled.Paragraph className="paragraph">#{pokeData.id}</styled.Paragraph>
                <styled.Paragraph className="paragraph">{pokeData.name}</styled.Paragraph>
                
                <styled.ContainerType>
                    {pokeData.types.map((type, index) => (
                    <styled.PokemonType key={index} className="button">{type}</styled.PokemonType>
                    ))}
                </styled.ContainerType>
                
            </styled.Card>
            ))}
        </styled.Container>
    );
}

