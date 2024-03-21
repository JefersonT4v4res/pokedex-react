import React, { useEffect, useState } from 'react';
import { StyledCard, Container, StyledImage, StyledParagraph, StyledContainerType } from "./styles";
import { CatchPokeList } from '../../../utils/Api/api';

export default function Card() {
    const [pokemon, setPokemon] = useState([]);
      
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
        <Container>
            {pokemon.map((pokeData) => (
            <StyledCard key={pokeData.id}>
                <StyledImage src={pokeData.image} alt={`Imagem do Pokémon ${pokeData.name}`} className="pokemonImage" />
                <StyledParagraph className="paragraph">#{pokeData.id}</StyledParagraph>
                <StyledParagraph className="paragraph">{pokeData.name}</StyledParagraph>
                {pokeData.types.map((type, index) => (
                <StyledContainerType key={index} className="button">{type}</StyledContainerType>
                ))}
            </StyledCard>
            ))}
        </Container>
    );
}

