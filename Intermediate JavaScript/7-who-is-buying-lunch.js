let names = ["Bruno", "Vitor", "Thainá", "Pablo", "Murilo"];

function selectName(names) {
    let randomNumber = Math.floor(Math.random() * names.length);
    let payer = names[randomNumber];
    return `${payer} is going to buy lunch today!`;
}

console.log(selectName(names));