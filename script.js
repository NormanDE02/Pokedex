// ========================================
// CONFIGURATION AND GLOBAL VARIABLES
// ========================================

const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";

let pokemonArray = [];
let currentPokemonIndex = 0;
let currentDialogIndex = 0;
let currentTab = "about";
let pokemonCache = {};

// ========================================
// INITIALIZATION
// ========================================

async function initPokeCard() {
  loadOverlay();

  let response = await fetch(baseUrl);
  let data = await response.json();

  pokemonArray = data.results;

  renderPokemonList(pokemonArray);

  closeOverlay();
}

function loadOverlay() {
  let overlay = document.getElementById("load-overlay");
  overlay.classList.add("overlay__load");
}

function closeOverlay() {
  let overlay = document.getElementById("load-overlay");
  overlay.classList.remove("overlay__load");
}

// ========================================
// API: LOAD POKÉMON DETAILS
// ========================================

async function pokemonDetails(pokemonUrl) {
  if (pokemonCache[pokemonUrl]) {
    return pokemonCache[pokemonUrl];
  }

  let response = await fetch(pokemonUrl);
  let data = await response.json();

  let pokemonType2 = data.types[1] ? data.types[1].type.name : "";
  const pokemonDetailsData = {
    pokemonUrl: pokemonUrl,
    pokemonName: data.name,
    pokemonId: data.id,
    pokemonImg: data.sprites.front_default,
    pokemonType: data.types[0].type.name,
    pokemonType2: pokemonType2,
    pokemonBaseExperience: data.base_experience,
    pokemonHeight: data.height,
    pokemonWeight: data.weight,
    pokemonStats: data.stats,
  };

  pokemonCache[pokemonUrl] = pokemonDetailsData;

  return pokemonDetailsData;
}

// ========================================
// RENDER POKÉMON CARDS
// ========================================

async function renderPokemonList(pokemonArray) {
  loadOverlay();
  await new Promise((resolve) => setTimeout(resolve, 300));
  for (
    let index = currentPokemonIndex;
    index < currentPokemonIndex + 20 && index < pokemonArray.length;
    index++
  ) {
    const elementPokemon = pokemonArray[index];
    let pokemonData = await pokemonDetails(elementPokemon.url);

    document.getElementById("card-list").innerHTML +=
      getPokemonCardTemplate(pokemonData);
  }
  closeOverlay();
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
    (pokemon) => pokemon.url === pokemonUrl,
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
  document.getElementById("info-stats").innerHTML =
    getAboutTemplate(pokemonData);
}

// ========================================
// CLOSE DIALOG
// ========================================

function closeDialog() {
  const dialog = document.getElementById("show-dialog");
  dialog.close();
}

function closeDialogOutside(event) {
  const dialog = document.getElementById("show-dialog");

  if (event.target === dialog) {
    dialog.close();
  }
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
  if (currentTab == "about") {
    initAbout();
  } else {
    initBaseStats();
  }
}

async function initAbout() {
  currentTab = "about";
  const aboutButton = document.getElementById("about-active");
  aboutButton.classList.add("nav__button--active");

  const baseButton = document.getElementById("base-active");
  baseButton.classList.remove("nav__button--active");

  const pokemonUrl = pokemonArray[currentDialogIndex].url;
  const pokemonData = await pokemonDetails(pokemonUrl);

  clearDialogDetails();
  document.getElementById("info-stats").innerHTML =
    getAboutTemplate(pokemonData);
}

async function initBaseStats() {
  currentTab = "baseStats";
  const baseButton = document.getElementById("base-active");
  baseButton.classList.add("nav__button--active");

  const aboutButton = document.getElementById("about-active");
  aboutButton.classList.remove("nav__button--active");

  const pokemonUrl = pokemonArray[currentDialogIndex].url;
  const pokemonData = await pokemonDetails(pokemonUrl);

  clearDialogDetails();

  for (let index = 0; index < pokemonData.pokemonStats.length; index++) {
    const statName = pokemonData.pokemonStats[index].stat.name;
    const statValue = pokemonData.pokemonStats[index].base_stat;

    document.getElementById("info-stats").innerHTML += getBaseStatTemplate(
      pokemonData,
      statName,
      statValue,
    );
  }
}

function clearDialogDetails() {
  document.getElementById("info-stats").innerHTML = "";
}
