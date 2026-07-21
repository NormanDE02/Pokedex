const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"

let pokemonArray = [];

async function initPokeCard() {

    let response = await fetch(baseUrl);
    let data = await response.json();

    pokemonArray = data.results;
    renderPokemonList(pokemonArray);
}

let currentPokemonIndex = 0;

 async function renderPokemonList(pokemonArray) {

    for (
        let index = currentPokemonIndex;
        index < currentPokemonIndex + 20 && index < pokemonArray.length;
        index++
    ) {
        const elementPokemon = pokemonArray[index];
        let pokemonNumber = index + 1;
        let pokemonName = elementPokemon.name;
        let pokemonUrl = elementPokemon.url;
        let pkmonDetails = await pokemonDetails(pokemonUrl);    
        document.getElementById('card-list').innerHTML += getPokemonCardTemplate(pokemonUrl, pokemonNumber, pokemonName, pkmonDetails.pokemonImg, pkmonDetails.pokemonType, pkmonDetails.pokemonType2);
    }
}

async function pokemonDetails(pokemonUrl) {
    
    let response = await fetch(pokemonUrl);
    let data = await response.json();
    let pokemonType2 = data.types[1]
    ? data.types[1].type.name
    : "";

    return {
        pokemonName: data.name,
        pokemonId: data.id,
        pokemonImg: data.sprites.front_default,
        pokemonType: data.types[0].type.name,
        pokemonType2: pokemonType2
    };
}


function loadNextPokemon() {

    if (currentPokemonIndex <= 151) {
        currentPokemonIndex +=20;
    }

    document.getElementById('card-list').innerHTML = "";
    renderPokemonList(pokemonArray);
}

function loadBackPokemon() {
    document.getElementById('card-list').innerHTML = "";

    if (currentPokemonIndex >= 20) {
        currentPokemonIndex  -=20;
    }

    document.getElementById('card-list').innerHTML = "";
    renderPokemonList(pokemonArray);
}

async function openDialog(pokemonUrl) {

    const pokemonData = await pokemonDetails(pokemonUrl);
    renderDialog(pokemonData);

    const dialog = document.getElementById('dialog-pokemon');
    dialog.showModal();
    
    requestAnimationFrame(() => {
        dialog.classList.add('dialog--visible');
    })
}

/* closeDialog()*/

function renderDialog(pokemonData) {

    document.getElementById('show-dialog').innerHTML = getDialogTemplate(pokemonData);
}