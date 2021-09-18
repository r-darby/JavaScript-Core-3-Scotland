
let namesList = ["Reshma Saujani", "Ursula Burns", "Roshni Nadar"];

let capsNamesList = [];

for(let i = 0; i < namesList.length; i++){
    let currentName = namesList[i];

    let capsName = capitaliseName(currentName);
    capsNamesList.push(capsName);
}

console.log(capsNamesList);

function capitaliseName(name){
    return name.toUpperCase();
}