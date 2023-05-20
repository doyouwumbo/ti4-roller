export default function hitRoller(numberOfShips, numberOfShots, extraRolls) {
    const rolls = [];
    for (let i = 0; i < numberOfShips; i++) {
        for (let j = 0; j < numberOfShots; j++) {
            rolls.push(Math.floor(Math.random() * 10) + 1);
        }
    }
    for (let i = 0; i < extraRolls; i++) {
        rolls.push(Math.floor(Math.random() * 10) + 1);
    }
    return rolls;
}