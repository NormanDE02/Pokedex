// ========================================
// CONFIGURATION AND GLOBAL VARIABLES
// ========================================

const baseUrl =
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

let pokemonArray = [];
let currentPokemonIndex = 0;
let currentDialogIndex = 0;


// ========================================
// INITIALIZATION
// ========================================

async function initPokeCard() {
    let response = await fetch(baseUrl);
    let data = await response.json();

    pokemonArray = data.results;

    renderPokemonList(pokemonArray);
}


// ========================================
// API: LOAD POKÉMON DETAILS
// ========================================

async function pokemonDetails(pokemonUrl) {
    let response = await fetch(pokemonUrl);
    let data = await response.json();

    let pokemonType2 = data.types[1]
        ? data.types[1].type.name
        : "";

        console.log(data.stats.stat);
    return {
        pokemonUrl: pokemonUrl,
        pokemonName: data.name,
        pokemonId: data.id,
        pokemonImg: data.sprites.front_default,
        pokemonType: data.types[0].type.name,
        pokemonType2: pokemonType2,
        pokemonBaseExperience: data.base_experience,
        pokemonHeight: data.height,
        pokemonWeight: data.weight,
        pokemonStats: data.stats
    };
}


// ========================================
// RENDER POKÉMON CARDS
// ========================================

async function renderPokemonList(pokemonArray) {
    for (
        let index = currentPokemonIndex;
        index < currentPokemonIndex + 20 &&
        index < pokemonArray.length;
        index++
    ) {
        const elementPokemon = pokemonArray[index];
        let pokemonData = await pokemonDetails(elementPokemon.url);

        document.getElementById("card-list").innerHTML +=
            getPokemonCardTemplate(pokemonData);
    }
}


// ========================================
// NAVIGATION: NEXT AND PREVIOUS PAGE
// ========================================

function loadNextPokemon() {
    if (currentPokemonIndex + 20 < pokemonArray.length) {
        currentPokemonIndex += 20;
    }

    clearPokemonList();
    renderPokemonList(pokemonArray);
}


function loadBackPokemon() {
    if (currentPokemonIndex >= 20) {
        currentPokemonIndex -= 20;
    }

    clearPokemonList();
    renderPokemonList(pokemonArray);
}


function clearPokemonList() {
    document.getElementById("card-list").innerHTML = "";
}


// ========================================
// OPEN AND RENDER DIALOG
// ========================================

async function openDialog(pokemonUrl) {

    currentDialogIndex = pokemonArray.findIndex(
        pokemon => pokemon.url === pokemonUrl
    );

    const pokemonData = await pokemonDetails(pokemonUrl);

    renderDialog(pokemonData);
    renderAboutInDIalog(pokemonData);

    const dialog = document.getElementById("show-dialog");
    dialog.showModal();

    requestAnimationFrame(() => {
        dialog.classList.add("dialog--visible");
    });
}


function renderDialog(pokemonData) {
    document.getElementById("show-dialog").innerHTML =
        getDialogTemplate(pokemonData);
}

function renderAboutInDIalog(pokemonData) {
    document.getElementById('info-stats').innerHTML =
        getAboutTemplate(pokemonData);
}


// ========================================
// CLOSE DIALOG
// ========================================

function closeDialog() {
    const dialog = document.getElementById("show-dialog");
    dialog.close();
 }
 
// ========================================
// CHANGE POKEMON IM DIALOG
// ========================================

async function changePokemon(isNext) {

    if (isNext && currentDialogIndex < pokemonArray.length - 1) {
        currentDialogIndex++;
    } else if (!isNext && currentDialogIndex > 0) {
        currentDialogIndex--;
    }

    const pokemonUrl = pokemonArray[currentDialogIndex].url;
    const pokemonData = await pokemonDetails(pokemonUrl);

    renderDialog(pokemonData);
    renderAboutInDIalog(pokemonData);
}

async function initAbout() {

    const pokemonUrl = pokemonArray[currentDialogIndex].url;
    const pokemonData = await pokemonDetails(pokemonUrl);

    clearDialogDetails()
    document.getElementById('info-stats').innerHTML =
        getAboutTemplate(pokemonData);
}

async function initBaseStats() {
    const pokemonUrl = pokemonArray[currentDialogIndex].url;
    const pokemonData = await pokemonDetails(pokemonUrl);

    for (let index = 0; index < pokemonData.pokemonStats.length; index++){   
        const statName  = pokemonData.pokemonStats[index].stat.name;
        const statValue = pokemonData.pokemonStats[index].base_stat;
        
        document.getElementById('info-stats').innerHTML =
        getBaseStatTemplate(pokemonData, statName, statValue);
    }
}

function clearDialogDetails() {

    document.getElementById("info-stats").innerHTML = "";
}