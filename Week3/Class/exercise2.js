
let a = firstFunc(15);

console.log(a);

function thirdFunc(x){
    let answer = x * 2;
    return answer;
}

function secondFunc(x){
    let answer = thirdFunc(x);
    return answer;
}

function firstFunc(x){
    let answer = secondFunc(x);
    return answer;
}