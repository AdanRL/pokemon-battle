const pikachu = {
    name: "pikachu",
    health: 100,
    attacks:  {
        thunder: 20,
        tackle: 5
    }
};
const charmander = {
    name: "charmander",
    health: 120,
    attacks:  {
        flamethrower: 20,
        blaze: 30
    }
};

const start = btnStart.addEventListener( 'click', () => {
    const startButton = document.querySelector('#btnStart')
    startButton.classList.toggle('hide');
    createPokemon(pikachu, true);
    createPokemon(charmander, false);  
});

const createPokemon = (pokemon, isPlayer) => {
    const pokemonHealth = pokemon.health;

    if (isPlayer) {
        const playerHealthBox = document.querySelector('#player-health');
        const playerHealthDiv = document.createElement(`div`);

        playerHealthDiv.textContent = `Hp: ${pokemonHealth}`;
        playerHealthBox.appendChild(playerHealthDiv);
        createAttacks(pokemon);
    }
    else {
        const enemyHealthBox = document.querySelector('#enemy-health');
        const enemyHealthDiv = document.createElement(`div`);
    
        enemyHealthDiv.textContent = `Hp: ${pokemonHealth}`;
        enemyHealthBox.appendChild(enemyHealthDiv);

    }
};
const createAttacks = (pokemon) => {
    const attacksBox = document.querySelector('.attacks');
    const playerAttacks = Object.keys(pokemon.attacks);
    playerAttacks.forEach((attack, index) => {
        const attackButton = document.createElement(`button`);
        attackButton.classList.add(`attackButton`)
        attackButton.textContent = `${index + 1}) ${attack}`;
        attacksBox.appendChild(attackButton);

    });
    

};

const attackMovement = document.querySelector('.attacks').addEventListener( 'click', (event) => {
    if(event.target.className == "attackButton")
        console.log("Me ejecuto");
        
});


