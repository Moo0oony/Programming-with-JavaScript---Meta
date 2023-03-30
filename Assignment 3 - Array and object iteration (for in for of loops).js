// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for (let item of dairy) {
        console.log(item);
    }
}
logDairy();

// Task 2
const animal = {
    canJump: true
};
const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;
function birdCan() {
    for (let item of Object.keys(bird)) {
        console.log(`${item}: ${bird[item]}`);        
    }
}
birdCan();

// Task 3
function animalCan() {
    for (let item in bird) {
        console.log(item+": "+ bird[item] );
    }
}
animalCan();