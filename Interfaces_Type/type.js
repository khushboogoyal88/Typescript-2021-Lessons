var dogs_t = [
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
function adopt_t(dog) {
    console.log("We have adopted a dog: " + dog.name + ", he/she is " + dog.age + " years old " + (dog.microchipped ? 'vaccinated' : 'not vaccinated') + " and is " + (dog.sporty ? 'sporty' : 'not sporty'));
}
dogs_t.forEach(adopt_t);
var cats_t = [
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
var pets_t = dogs_t.concat(cats_t);
function adopt1_t(pet) {
    var additionalInformation;
    if ('purr' in pet) {
        additionalInformation = "A cat named " + pet.name + ", " + pet.age + " is adopted";
    }
    else {
        additionalInformation = "A dog named " + pet.name + ", " + pet.age + " is adopted";
    }
    console.log(additionalInformation);
}
pets_t.forEach(adopt1_t);
