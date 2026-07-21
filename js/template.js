function getPokemonCardTemplate(pokemonUrl ,pokemonNumber, pokemonName, pokemonImg, pokemonType, pokemonType2) {

    return `
    <li>
        <button class="card__button" onclick="openDialog('${pokemonUrl}')">
            <article class="card__container ${pokemonType}">
                <div class="card__inner">
                    <div class="card__id">
                        <div></div>
                            <span class="card__id-gray">${pokemonNumber}</span>
                        </div>
                            <h2 class="card__headline">${pokemonName}</h2>
                            <img class="card__img" src="${pokemonImg}" alt="${pokemonName}">
                        <div class="card__type">
                            <span>${pokemonType}</span>
                            <span>${pokemonType2}</span>
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
            <header class="dialog__header">
                <div class="dialog__flex">
                    <h2 class="dialog__headline">${pokemonData.pokemonName}</h2>
                    <span class="dialog__span">${pokemonData.pokemonId}</span>
                </div>
                <div class="dialog__flex">
                    <div>
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