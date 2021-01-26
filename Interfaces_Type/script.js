var dogs = [
    {
        name: 'Bruno',
        age: 3,
        weight: 5,
        height: 20,
        microchipped: true,
        SpayedOrNeutered: true,
        breed: 'German Shepherd',
        sporty: true,
        bark: true
    },
    {
        name: 'Whiskey',
        age: 5,
        weight: 6,
        height: 15,
        microchipped: false,
        SpayedOrNeutered: true,
        breed: 'Chihuhua',
        sporty: true,
        bark: true
    }
];
// function to console log adopt for all dogs
function adopt(dog) {
    console.log("We have adopted a dog: " + dog.name + ", he/she is " + dog.age + " years old " + (dog.microchipped ? 'vaccinated' : 'not vaccinated') + " and is " + (dog.sporty ? 'sporty' : 'not sporty'));
}
dogs.forEach(adopt);
var cats = [
    {
        name: 'Sushi',
        age: 3,
        weight: 5,
        height: 10,
        microchipped: true,
        SpayedOrNeutered: true,
        breed: 'German Shepherd',
        purr: true
    },
    {
        name: 'Candy',
        age: 5,
        weight: 6,
        height: 15,
        microchipped: false,
        SpayedOrNeutered: true,
        breed: 'Chihuhua',
        purr: false
    }
];
var pets = dogs.concat(cats);
console.log(pets);
function adopt1(pet) {
    var additionalInformation;
    if ('purr' in pet) {
        additionalInformation = "A cat named " + pet.name + ", " + pet.age + " is adopted";
    }
    else {
        additionalInformation = "A dog named " + pet.name + ", " + pet.age + " is adopted";
    }
    console.log(additionalInformation);
}
pets.forEach(adopt1);
