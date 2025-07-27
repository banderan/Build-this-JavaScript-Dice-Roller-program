const diceCount = document.getElementById('diceCount');
const rollButton = document.getElementById('rollButton');
const result = document.getElementById('result');
const diceContainer = document.getElementById('diceContainer');
let dices = [];
let diceImages = [];

function rollDice() {
    dices = [];
    diceImages = [];
    let count = parseInt(diceCount.value);
    for (let i = 0; i < count; i++) {
        let random = Math.floor(Math.random() * 6) + 1;
        dices.push(random);
        diceImages.push(`<img src="dice_image/${random}.png" alt="Dice ${random}">`);
    }
    result.textContent = `You rolled: ${dices.join(', ')}`;
    diceContainer.innerHTML = diceImages.join(' ');
}