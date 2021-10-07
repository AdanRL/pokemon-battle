const pokePools = [1, 4, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const getPokemonList = () => {
  const prefixUrl = "https://pokeapi.co/api/v2/pokemon/";
  const promises = [];
  pokePools.forEach((pokeId) => {
    const promise = fetch(`${prefixUrl}${pokeId}`)
      .then(response => response.json())
      .then(data => {
        const info = {
          name: data.name,
          hp: data.stats[0].base_stat,
          backImage: data.sprites.back_default,
          frontImage: data.sprites.front_default,
          attack: [
            data.moves[0].move.name,
            data.moves[1].move.name,
            data.moves[2].move.name,
            data.moves[3].move.name
          ]
        };
        localStorage.setItem(data.id, JSON.stringify(info));
      });
    promises.push(promise);
  });
  Promise.all(promises)
    .then(() => prepareTeam());
};
getPokemonList();

const getStoredPokemon = () => pokePools.map((pokeId) => {
  const jsonData = localStorage.getItem(pokeId);
  const pokeData = JSON.parse(jsonData);
  return pokeData;
});

const prepareTeam = () => {
  const playerPool = document.querySelector(".player-pool");
  const pokeList = getStoredPokemon();

  pokeList.forEach(pokemon => {
    const button = document.createElement("button");
    const pokeImage = document.createElement("img");
    pokeImage.src = pokemon.frontImage;
    button.appendChild(pokeImage);
    playerPool.appendChild(button);
  });
};
const start = btnStart.addEventListener("click", () => {
  const startButton = document.querySelector("#btnStart");
  startButton.classList.toggle("hide");
  createPokemon(pikachu, true);
  createPokemon(charmander, false);
});

const createPokemon = (pokemon, isPlayer) => {
  const pokemonHealth = pokemon.health;

  if (isPlayer) {
    const playerHealthBox = document.querySelector("#player-health");
    const playerHealthDiv = document.createElement("div");

    playerHealthDiv.textContent = `Hp: ${pokemonHealth}`;
    playerHealthBox.appendChild(playerHealthDiv);
    createAttacks(pokemon);
  } else {
    const enemyHealthBox = document.querySelector("#enemy-health");
    const enemyHealthDiv = document.createElement("div");

    enemyHealthDiv.textContent = `Hp: ${pokemonHealth}`;
    enemyHealthBox.appendChild(enemyHealthDiv);
  }
};
const createAttacks = (pokemon) => {
  const attacksBox = document.querySelector(".attacks");
  const playerAttacks = Object.keys(pokemon.attacks);
  playerAttacks.forEach((attack, index) => {
    const attackButton = document.createElement("button");
    attackButton.classList.add("attackButton");
    attackButton.textContent = `${index + 1}) ${attack}`;
    attacksBox.appendChild(attackButton);
  });
};

const attackMovement = document.querySelector(".attacks").addEventListener("click", (event) => {
  if (event.target.className == "attackButton") { console.log("Me ejecuto"); }
});
