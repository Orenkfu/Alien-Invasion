const ranks = {
    Commander: "commander",
    Warrior: "warrior",
    Chief: "chief commander"
}
const vehicles = {
    Bird: "Bird scooter",
    Tank: "Merkava tank"
}
const weapons = {
    Gun: "Water gun",
    Spray: "Pepper spray",
    Stick: "Chopsticks"
}

const cards = {
    Shufersal: "Shufersal", 
    HiTech: "Hitech zone",
    Hever: "Hever"
}
Object.freeze(vehicles);
Object.freeze(ranks);
Object.freeze(weapons);
Object.freeze(cards);

module.exports.Card = cards;
module.exports.Weapon = weapons;
module.exports.Vehicle = vehicles;
module.exports.Rank = ranks;