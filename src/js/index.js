
import { getPokemonList, removePoolView } from "./pokePool.js";
import { battleTeam } from "./pokeTeam.js";

getPokemonList();

document.querySelector("#btnStart").addEventListener("click", () => {
  if (battleTeam.length < 6) {
    alert("Choose at least 6 pokemons to complete the team");
  } else {
    const startButton = document.querySelector("#btnStart");
    startButton.classList.toggle("hide");
    removePoolView();
  }
});
