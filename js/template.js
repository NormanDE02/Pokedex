function getPokemonCardTemplate(pokemonData) {
  return `
    <li>
        <button data-id="card" class="card__button" aria-label="Open details for ${pokemonData.pokemonName}" onclick="openDialog('${pokemonData.pokemonUrl}')">
            <article class="card__container ${pokemonData.pokemonType}">
                <div class="card__inner">
                    <div class="card__id">
                        <div></div>
                            <span class="card__id-gray">${pokemonData.pokemonId}</span>
                        </div>
                            <h2 class="card__headline">${pokemonData.pokemonName}</h2>
                            <img data-id="card-image" class="card__img" src="${pokemonData.pokemonImg}" alt="${pokemonData.pokemonName}">
                        <div class="card__type">
                            <span>${pokemonData.pokemonType}</span>
                            <span>${pokemonData.pokemonType2}</span>
                        </div>
                    </div>
                </div>
            </article>
        </button>
    </li>
    `;
}

function getDialogTemplate(pokemonData) {
  return `
    
            <header data-id="overlay-pokemon-name" class="dialog__header ${pokemonData.pokemonType}">
                <div class="dialog__flex">
                    <h2 class="dialog__headline" id="dialog-title">${pokemonData.pokemonName}</h2>
                    <span class="dialog__span">${pokemonData.pokemonId}</span>
                </div>
                <div class="dialog__flex">
                    <div class="type__flex" aria-label="Pokémon types">
                        <span class="dialog__span">${pokemonData.pokemonType}</span>
                        <span class="dialog__span">${pokemonData.pokemonType2}</span>
                    </div>
                    <img data-id="dialog-image" src="${pokemonData.pokemonImg}" alt="${pokemonData.pokemonName}">
                </div>
            </header>
            
            <nav class="nav__inner" aria-label="Pokémon information">
                <button class="nav__button nav__button--active ${pokemonData.pokemonType}" type="button" aria-pressed="true" onclick="initAbout()" id="about-active">About</button>
                <button class="nav__button ${pokemonData.pokemonType}" aria-pressed="false" onclick="initBaseStats()" id="base-active">Base Stats</button>
            </nav>
            <div class="dialog__flexbox">
                <dl class="dialog__pokeinfo" id="info-stats" aria-live="polite">
                </dl>
            </div>
                <footer class="footer__container">
                    <div class="footer__inner">
                        <div>
                            <button data-id="prev-button" class="footer__button ${pokemonData.pokemonType}" type="button" aria-label="Show previous Pokémon" onclick="changePokemon(false)" >← Back</button>
                            <button data-id="next-button" class="footer__button ${pokemonData.pokemonType}" type="button" aria-label="Show next Pokémon" onclick="changePokemon(true)">Next →</button>
                        </div>
                        <button data-id="close-dialog-button" class="footer__button ${pokemonData.pokemonType}" type="button" aria-label="Close Pokémon details"  onclick="closeDialog()">Exit</button>
                    </div>
                </footer>
            
        
    `;
}

function getAboutTemplate(pokemonData) {
  return `
        <div class="pokeinfo__inner ${pokemonData.pokemonType}">
            <dt class="pokeinfo__text">Height</dt>
            <dd class="pokeinfo__text">${pokemonData.pokemonHeight / 10} m</dd>
        </div>
        <div class="pokeinfo__inner ${pokemonData.pokemonType}">
            <dt class="pokeinfo__text">Weight</dt>
            <dd class="pokeinfo__text">${pokemonData.pokemonWeight / 10} kg</dd>
        </div>
        <div class="pokeinfo__inner ${pokemonData.pokemonType}">
            <dt class="pokeinfo__text">Base Experience</dt>
            <dd class="pokeinfo__text">${pokemonData.pokemonBaseExperience}</dd>
        </div>
    `;
}

function getBaseStatTemplate(pokemonData, statName, statValue) {
  return `
        <div class="pokeinfo__inner ${pokemonData.pokemonType}">
            <dt class="pokeinfo__text">${statName}</dt>
            <dd class="pokeinfo__text">${statValue}</dd>
        </div>       
    `;
}
