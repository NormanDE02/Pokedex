function getPokemonCardTemplate(pokemonData) {

    return `
    <li>
        <button class="card__button" onclick="openDialog('${pokemonData.pokemonUrl}')">
            <article class="card__container ${pokemonData.pokemonType}">
                <div class="card__inner">
                    <div class="card__id">
                        <div></div>
                            <span class="card__id-gray">${pokemonData.pokemonId}</span>
                        </div>
                            <h2 class="card__headline">${pokemonData.pokemonName}</h2>
                            <img class="card__img" src="${pokemonData.pokemonImg}" alt="${pokemonData.pokemonName}">
                        <div class="card__type">
                            <span>${pokemonData.pokemonType}</span>
                            <span>${pokemonData.pokemonType2}</span>
                        </div>
                    </div>
                </div>
            </article>
        </button>
    </li>
    `
}

function getDialogTemplate(pokemonData) {

    return `
    <dialog class="dialog__container" id="dialog-pokemon">
            <header class="dialog__header ${pokemonData.pokemonType}">
                <div class="dialog__flex">
                    <h2 class="dialog__headline">${pokemonData.pokemonName}</h2>
                    <span class="dialog__span">${pokemonData.pokemonId}</span>
                </div>
                <div class="dialog__flex">
                    <div class="type__flex">
                        <span class="dialog__span">${pokemonData.pokemonType}</span>
                        <span class="dialog__span">${pokemonData.pokemonType2}</span>
                    </div>
                    <img src="${pokemonData.pokemonImg}" alt="">
                </div>
            </header>
            <hr>
        </dialog>
    `
}