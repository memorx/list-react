// arguments object - no longr bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
}

console.log(add(55, 1, 1001));

// this keyword - no longer bound 

const user = {
    name: 'Andrew',
    cities: ['Mexico', 'Canada'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city)
        });
    } 
};

const user2 = {
    name: 'Andrew',
    cities: ['Mexico', 'Canada'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        this.cities.forEach((city) => {
            console.log(this.name + ' has lived in ' + city);
        });
    } 
};

const user3 = {
    name: 'Guillermo',
    cities: ['Mexico', 'Canada'],
    printPlacesLived() {
        console.log(this.name);
        console.log(this.cities);

        const cityMessages = this.cities.map((city) => city + this.name);

        return cityMessages;
    } 
};


user.printPlacesLived();
user2.printPlacesLived();

console.log(user3.printPlacesLived());

// Chanllenges area

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - new arreay where numbers have been multiplied
    numbers: [1,2,3,4,5,6],
    multiplyBy: 10,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());



