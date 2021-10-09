import { deleteFromTeam, insertOnTeam, battleTeam } from "./pokeTeam.js";
const pokePools = [
  1, 4, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
];

const getPokemonList = () => {
  const prefixUrl = "https://pokeapi.co/api/v2/pokemon/";
  const promises = pokePools.map((pokeId) => {
    const promise = fetch(`${prefixUrl}${pokeId}`)
      .then(response => response.json())
      .then(data => {
        const info = {
          id: data.id,
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
    return promise;
  });
  Promise.all(promises)
    .then(() => preparePool());
};

const getStoredPokemon = () => pokePools.map((pokeId) => {
  const jsonData = localStorage.getItem(pokeId);
  const pokeData = JSON.parse(jsonData);
  return pokeData;
});

const preparePool = () => {
  const playerPool = document.querySelector(".player-pool");
  const pokeList = getStoredPokemon();

  pokeList.forEach(pokemon => {
    const button = document.createElement("button");
    button.classList.add("pool");
    button.setAttribute("id", `${pokemon.id}`);
    const pokeImage = document.createElement("img");
    pokeImage.setAttribute("id", `${pokemon.id}`);
    pokeImage.classList.add("pool");
    pokeImage.src = pokemon.frontImage;
    button.appendChild(pokeImage);
    playerPool.appendChild(button);
  });
};
const pokeSelection = document.querySelector(".player-pool").addEventListener("click", (event) => {
  const id = parseInt(event.target.attributes.id.value);
  if (event.target.className === "pool") {
    const isTheSame = (e) => e.id === id;
    const checkInGroup = battleTeam.findIndex(isTheSame);
    if (checkInGroup === -1 && battleTeam.length < 6) {
      insertOnTeam(id);
    } else if (checkInGroup !== -1 && battleTeam.length <= 6) {
      deleteFromTeam(id);
    }
  }
});

const removePoolView = () => {
  const poolSection = document.querySelector(".player-pool");
  poolSection.classList.toggle("player-pool");
  poolSection.classList.toggle("player-pool-hide");
  console.log(poolSection);
};

export { getPokemonList, pokeSelection, getStoredPokemon, removePoolView, pokePools };
