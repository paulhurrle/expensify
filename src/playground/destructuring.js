// OBJECT DESTRUCTURING

const person = {
  name: 'Paul',
  age: 35,
  location: {
    city: 'Phoenix',
    temp: 108
  }
};

const {name, age} = person; // this line is equivalent to the two lines below
// const name = person.name;
// const age = person.age;

console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location; // destructuring also works with nested objects, and can be renamed!
if (city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const dude = {
  age: 35,
  location: {
    city: 'Phoenix',
    temp: 108
  }
};
const { name: firstName = 'Anonymous', age: yearsOld } = dude; // reassigns name to firstName and sets default value 'Anonymous'
console.log(`${firstName} is ${age}.`);


const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Penguin'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);

// ARRAY DESTRUCTURING

// no destructuring
const address = ['1299 S Juniper Street', 'Phoenix', 'Arizona', '85044'];
console.log(`You are in ${address[1]}, ${address[2]}.`);

// with destructuring
const [street, town, state, zip] = address; // create an ordered list of variable names to map to array indeces
console.log(`You are in ${town}, ${state}.`);

const [, , territory] = address; // don't have to destructure every item in the array
console.log(`You live in ${territory}.`);

const [, , , , country = 'USA'] = address; // can set up default value for array index if it does not exist
console.log(`You are in ${country}.`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [type, , price] = item;
console.log(`A medium coffee (hot) costs $2.50`); // this and the next line are equivalent
console.log(`A medium ${type} costs ${price}`);