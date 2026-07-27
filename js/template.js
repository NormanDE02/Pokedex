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
                    <img src="${pokemonData.pokemonImg}" alt="${pokemonData.pokemonName}">
                </div>
            </header>
            
            <nav class="nav__inner">
                <button class="nav__button nav__button--active ${pokemonData.pokemonType}">About</button>
                <button class="nav__button ${pokemonData.pokemonType}" onclick="initBaseStats()">Base Stats</button>
            </nav>
            <div class="dialog__flexbox" id="info-stats">

                <dl class="dialog__pokeinfo">
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
                </dl>

                <footer class="footer__container">
                    <div class="footer__inner">
                        <div>
                            <button class="footer__button ${pokemonData.pokemonType}" onclick="changePokemon(false)" >← Back</button>
                            <button class="footer__button ${pokemonData.pokemonType}" onclick="changePokemon(true)">Next →</button>
                        </div>
                        <button class="footer__button ${pokemonData.pokemonType}" onclick="closeDialog()">Exit</button>
                    </div>
                </footer>
            </div>
        
    `
}

function getBaseStatTemplate() {
    
    return`
        <dl class="dialog__pokeinfo">
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">HP</dt>
                <dd class="pokeinfo__text">45</dd>
            </div>
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">attack</dt>
                <dd class="pokeinfo__text">49</dd>
            </div>
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">defense</dt>
                <dd class="pokeinfo__text">49</dd>
            </div>
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">special-attack</dt>
                <dd class="pokeinfo__text">65</dd>
            </div>
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">special-defense</dt>
                <dd class="pokeinfo__text">65</dd>
            </div>
            <div class="pokeinfo__inner">
                <dt class="pokeinfo__text">speed</dt>
                <dd class="pokeinfo__text">45</dd>
            </div>
        </dl>
    `
}