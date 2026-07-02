function renderPokemonCard(pokemonNumber) {

    return `
    <li>
        <article class="card__container">
            <div class="card__inner">
                <div class="card__id">
                    <div></div>
                        <span class="card__id-gray">${pokemonNumber}</span>
                    </div>
                        <h2>Bulbasaur</h2>
                    <div class="card__id">
                        <div class="card__type">
                            <span>Grass</span>
                            <span>Poison</span>
                        </div>
                            <img src="#" alt="">
                </div>
            </div>
        </article>
    </li>
    `
    
}