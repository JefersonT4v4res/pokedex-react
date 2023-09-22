export async function CatchPokeList(setPokemon) {
  try {
    const response = await fetch('http://localhost:8080/pokemons');
    const jsonData = await response.json();
    setPokemon(jsonData);

   
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}
