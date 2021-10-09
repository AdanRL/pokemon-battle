import { getStoredPokemon } from "./pokePool.js";

const battleTeam = [];
const enemyTeam = [];

const insertOnTeam = (pokeId) => {
  const playerTeam = document.querySelector(".poke-team");
  const pokeList = getStoredPokemon();
  pokeList.forEach(pokemon => {
    if (pokeId === pokemon.id) {
      battleTeam.push(pokemon);
      const pokeImage = document.createElement("img");
      pokeImage.setAttribute("id", `team-${pokemon.id}`);
      pokeImage.src = pokemon.frontImage;
      playerTeam.appendChild(pokeImage);
      console.log("battleTeam", battleTeam);
    }
  });
};
const deleteFromTeam = (pokeId) => {
  const pokemon = document.querySelector(`#team-${pokeId}`);
  pokemon.remove();
  const isTheSame = (e) => e.id === pokeId;
  const checkInGroup = battleTeam.findIndex(isTheSame);
  if (checkInGroup !== -1) {
    battleTeam.splice(checkInGroup, 1);
  }
  console.log("battleTeam", battleTeam);
};

const createEnemyTeam = () => {
  const pokeList = getStoredPokemon();
};
export { deleteFromTeam, insertOnTeam, battleTeam };
