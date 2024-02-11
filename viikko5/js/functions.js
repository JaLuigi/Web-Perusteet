function rollDice() {
    var diceImage = document.getElementById("dice").getElementsByTagName("img")[0];
    const random_number = Math.floor(Math.random() * 6) + 1;
    diceImage.src = "img/" + random_number + ".png";
}