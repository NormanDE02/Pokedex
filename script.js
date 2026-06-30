const baseUrl = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"



async function initPokeCard() {

    let responsive = await fetch(baseUrl);
    let data = responsive.json();
    console.log(data);   
}