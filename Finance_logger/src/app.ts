import {Invoice} from './classes/Invoice.js';
import { Payment } from './classes/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice('mario', 'web work', 250);
// docTwo = new Payment('yoshi', 'plunming work', 200);

// let docs: HasFormatter[]= [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);


// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne)
// invoices.push(invTwo);
// // invoices.push({ name: 'shaun' });

// console.log(invoices);


// inputs

const form = document.querySelector('.new-item-form') as HTMLFormElement;
const ul = document.querySelector('ul')!;
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


//list template instance
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    
    let doc:HasFormatter;
    if(type.value ==='invoice'){
        doc= new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else { 
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end');
});