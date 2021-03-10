//functions creations ways 
function abc(parm1) {

}
//functions creations ways 
let add = function (number) {
    return 100;
}

add(12);
abc('kusuma');
//functions creations ways 
let add2 = (no1, no2) => no1 + no2;
add2(1, 2);
//functions creations ways 
let add3 = (no1, no2) => { no1 + no2; }
add2(1, 3);
//functions creations ways 
let add4 = (no1, no2) => {
    console.log('hello');
    return no1 + no2;
}

//nested ojects

let person = {
    name: 'abc',
    adress: 'ss',
    age: {
        childage: 10,
        adultage: 20,
        serior: {
            lowsr: 80,
            highsr: 100
        }
    },
    isPassed: true,
    listOfCity: ['hyb', 'ban', 'mum']
}

//accessing propties 
let ag = person.age.adultage; // object nesting 
let hsr = person.age.serior.highsr; // dot

console.log(person['age']['serior']['highsr']); // bracket notestion access

//console.log(ag);
//console.log(hsr);

class Person { //(1)
    firstName = ""; //(2)
    lastName = "";
    age: number = 20;

    constructor(firstName, lastName, age?) {  //(3)
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age || 20;
    }

    name() { //(4)
        return `${this.firstName} ${this.lastName}`;
    }

    whoAreYou() {
        return `Hi i'm ${this.name()}`; //(5)
    }

    getMyAge = () => "Hi i'm " + this.name() + " => " + this.age //fatarrow
}

let vikarm = new Person('Vikarm', 'Reddy');
console.log(vikarm.whoAreYou());
console.log(vikarm.getMyAge())

let kusuma = new Person('kusuma', 'Abc', 50);
console.log(kusuma.whoAreYou());
console.log(kusuma.getMyAge())