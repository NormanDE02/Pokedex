const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"



async function initPokeCard() {

    let responsive = await fetch(baseUrl);
    let data = await responsive.json();
    console.log(data);   
    pokemonId(data.results);
}

function pokemonId(pokemonlist) {

    for (let index = 0; index < 20 && index < pokemonlist.length; index++) {
        const elementPokemon = pokemonlist[index];
        let pokemonNumber = index + 1;
        let Pokemonname = elementPokemon.name;
        document.getElementById('card-list').innerHTML += renderPokemonCard(pokemonNumber, Pokemonname);
        console.log(Pokemonname);
        
    }
}