// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCat = cats.slice();
    appendCat.push("Broom");
    return appendCat;
}

function prependCat(name) {
    const prependCat = cats.slice();
    prependCat.unshift("Arnold");
    return prependCat;
}

function removeLastCat() {
    const removeLastCat = cats.slice();
    removeLastCat.pop("Arnold");
    return removeLastCat;
}

function removeFirstCat() {
    const removeFirstCat = cats.slice();
    removeFirstCat.shift("Arnold");
    return removeFirstCat;
}
