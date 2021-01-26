type Pet_t = {
    name: string,
    age:number,
    weight: number,
    height: number,
    microchipped: boolean,
    SpayedOrNeutered: boolean,
    breed: string
}

type Dog_t = Pet_t &{
    sporty: boolean,
    bark: boolean
}

type Cat_t = Pet_t &{
    purr: boolean
}

type Pets_t = Dog_t | Cat_t;

const dogs_t: Dog_t[]=[
{
    name: 'Bruno',
    age:3,
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
    age:5,
    weight: 6,
    height: 15,
    microchipped: false,
    SpayedOrNeutered: true,
    breed: 'Chihuhua',
    sporty: true,
    bark: true
}
]
// function to console log adopt for all dogs
function adopt_t(dog:Dog_t){
    console.log(`We have adopted a dog: ${dog.name}, he/she is ${dog.age} years old ${dog.microchipped ? 'vaccinated' : 'not vaccinated'} and is ${dog.sporty ? 'sporty' : 'not sporty'}`)
}

dogs_t.forEach(adopt_t);


const cats_t: Cat_t[]=[
{
    name: 'Sushi',
    age:3,
    weight: 5,
    height: 10,
    microchipped: true,
    SpayedOrNeutered: true,
    breed: 'German Shepherd',
    purr: true
},
{
    name: 'Candy',
    age:5,
    weight: 6,
    height: 15,
    microchipped: false,
    SpayedOrNeutered: true,
    breed: 'Chihuhua', 
    purr: false
}
]

const pets_t = dogs_t.concat(cats_t);


function adopt1_t(pet:Pets_t){
    let additionalInformation: string;
    if ('purr' in pet) {
        additionalInformation = `A cat named ${pet.name}, ${pet.age} is adopted`;
    } else {
        additionalInformation = `A dog named ${pet.name}, ${pet.age} is adopted`;
    }
    console.log(additionalInformation);
}

pets_t.forEach(adopt1_t);