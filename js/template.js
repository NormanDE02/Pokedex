function getPokemonCardTemplate(pokemonNumber,pokemonName, pokemonImg, pokemonType, pokemonType2) {

    return `
    <li>
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
    </li>
    `
}