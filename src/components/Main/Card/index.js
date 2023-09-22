import React, { useEffect, useState } from 'react';
import { StyledCard, Container } from "./styles";
import { CatchPokeList } from '../../../utils/Api/api';

export default function Card() {
    const [pokemon, setPokemon] = useState([]);
      
    useEffect(() => {

        async function fetchData() {
        try {
            // Chame CatchPokeList passando as funções setData e setLoading
            const response = await CatchPokeList(setPokemon);
            setPokemon(response); // Define os dados da API no estado
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
        }
        }
    
        fetchData();
    }, []);

    return (

        <Container>
            {/* {pokemons.map(pokemon => { */}
                    {/* return (
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
                })} */}
            <h1>Teste</h1>
        </Container>
    )
}
