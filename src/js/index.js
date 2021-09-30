const pikachu = {
    name: "pikachu",
    health: 100,
    atacks:  {
        thunder: 20,
        tackle: 5
    }
};
const charmander = {
    name: "charmander",
    health: 120,
    atacks:  {
        flamethrower: 20,
        blaze: 30
    }
};
const start = btnStart.addEventListener( 'click', () => {
    const playerHealth = pikachu.health;
    const enemyHealth = charmander.health;
    // Vidas y boton de inicio
    const startButton = document.querySelector('#btnStart');
    const playerHealthBox = document.querySelector('#player-health');
    const enemyHealthBox = document.querySelector('#enemy-health');
    const playerHealthDiv = document.createElement(`div`);
    const enemyHealthDiv = document.createElement(`div`);

    playerHealthDiv.textContent = `Hp: ${playerHealth}`;
    playerHealthBox.appendChild(playerHealthDiv);
    enemyHealthDiv.textContent = `Hp: ${enemyHealth}`;
    enemyHealthBox.appendChild(enemyHealthDiv);
    startButton.classList.toggle('btn-start-hide');
    // Ataques
    const attacksBox = document.querySelector('.attacks');
    const attackBtn1 = document.createElement(`button`);
    const attackBtn2 = document.createElement(`button`);
    const playerAttacks = Object.keys(pikachu.atacks);

    attackBtn1.textContent = `${playerAttacks[0]}`;
    attackBtn2.textContent = `${playerAttacks[1]}`;
    attacksBox.appendChild(attackBtn1);
    attacksBox.appendChild(attackBtn2);

    
});


