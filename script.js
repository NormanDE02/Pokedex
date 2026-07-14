const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"



async function initPokeCard() {

    let response = await fetch(baseUrl);
    let data = await response.json();  
    renderPokemonList(data.results);
}

 async function renderPokemonList(pokemonlist) {

    for (let index = 0; index  < pokemonlist.length; index++) {
        const elementPokemon = pokemonlist[index];
        let pokemonNumber = index + 1;
        let pokemonName = elementPokemon.name;
        let pokemonUrl = elementPokemon.url;
        let pkmonDetails = await pokemonDetails(pokemonUrl);    
        document.getElementById('card-list').innerHTML += getPokemonCardTemplate(pokemonNumber, pokemonName, pkmonDetails.pokemonImg, pkmonDetails.pokemonType);
    }
}

async function pokemonDetails(pokemonUrl) {
    
    let response = await fetch(pokemonUrl);
    let data = await response.json();

    return {
        pokemonImg: data.sprites.front_default,
        pokemonType: data.types[0].type.name
    };
}
/*< 20 && index*/