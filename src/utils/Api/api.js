export async function CatchPokeList() {
  try {
    const response = await fetch('https://pokedexapi-gamma.vercel.app/pokemons');
    const jsonData = await response.json();
    return jsonData.pokelist;

  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}
