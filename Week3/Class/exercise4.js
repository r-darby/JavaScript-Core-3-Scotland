
let namesList = ["Reshma Saujani", "Ursula Burns", "Roshni Nadar"];

let capsNamesList = namesList.map(capitaliseName);

console.log(capsNamesList);

function capitaliseName(name){
    return name.toUpperCase();
}