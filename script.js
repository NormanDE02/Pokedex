const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"



async function initPokeCard() {

    let response = await fetch(baseUrl);
    let data = await response.json();
    console.log(data);   
    renderPokemonList(data.results);
}

function renderPokemonList(pokemonlist) {

    for (let index = 0; index < 20 && index < pokemonlist.length; index++) {
        const elementPokemon = pokemonlist[index];
        let pokemonNumber = index + 1;
        let pokemonName = elementPokemon.name;
        let pokemonUrl = elementPokemon.url;
        document.getElementById('card-list').innerHTML += getPokemonCardTemplate(pokemonNumber, pokemonName);
        console.log(pokemonUrl);

        
    }
}