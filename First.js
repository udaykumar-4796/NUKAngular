//functions creations ways 
function abc(parm1) {
}
//functions creations ways 
var add = function (number) {
    return 100;
};
add(12);
abc('kusuma');
//functions creations ways 
var add2 = function (no1, no2) { return no1 + no2; };
add2(1, 2);
//functions creations ways 
var add3 = function (no1, no2) { no1 + no2; };
add2(1, 3);
//functions creations ways 
var add4 = function (no1, no2) {
    console.log('hello');
    return no1 + no2;
};
//nested ojects
var person = {
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
};
//accessing propties 
var ag = person.age.adultage; // object nesting 
var hsr = person.age.serior.highsr; // dot
console.log(person['age']['serior']['highsr']); // bracket notestion access
//console.log(ag);
//console.log(hsr);
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        var _this = this;
        this.firstName = ""; //(2)
        this.lastName = "";
        this.age = 20;
        this.getMyAge = function () { return "Hi i'm " + _this.name() + " => " + _this.age; }; //fatarrow
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age || 20;
    }
    Person.prototype.name = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.whoAreYou = function () {
        return "Hi i'm " + this.name(); //(5)
    };
    return Person;
}());
var vikarm = new Person('Vikarm', 'Reddy');
console.log(vikarm.whoAreYou());
console.log(vikarm.getMyAge());
var kusuma = new Person('kusuma', 'Abc', 50);
console.log(kusuma.whoAreYou());
console.log(kusuma.getMyAge());
