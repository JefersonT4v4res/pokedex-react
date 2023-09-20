export async function CatchPokeList(setData) {
  try {
    const response = await fetch('https://pokedexapi-bb4v89rj0-jefersont4v4res.vercel.app/pokemons');
    const jsonData = await response.json();
    setData(jsonData);

    // Adicione um log para o resultado da API
    console.log('Resultado da API:', jsonData);
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
  }
}
