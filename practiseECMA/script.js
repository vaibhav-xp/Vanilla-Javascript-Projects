// let course = new Map();

// course.set('react', { description: "ui" });
// course.set('jest', { description: "testing" });
// console.log(course);
// console.log(course.react);
// console.log(course.get('react').description);

// let details = new Map([
//     [new Date(), 'today'],
//     [2, { javascript: ['js', 'node', 'react'] }, "hello"],
//     ['items', [1, 2]]
// ]);
// console.log(details.size)


// ---------------------------------------


let a = [3, 4, "cat"];
let b = [5, 6, "five"]

// ------------Array/Object Spread Operator
let c = [3, 1, "Car", "Bike", ...a, ...b];
console.log(c);
console.log(c.includes('Car'))
const daytime = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
};

const nighttime = "mac and cheese";

const backpackingMeals = {
    // ...daytime,
    daytime,
    nighttime
}
console.log(backpackingMeals);



// ------------Destructing

// let [first, , , second] = [2, 5, 6, 'gear', 'bike'];
let [first, second] = [2, 5, 6, 'gear', 'bike'];
console.log(second);

const { breakfast, lunch } = {
    breakfast: 'oatmeal',
    lunch: 'peanut butter and jelly'
};

function eat({ breakfast, lunch }) {
    return `${breakfast} and ${lunch}`;
}

console.log(eat(daytime));
// console.log(breakfast);


class Vehicle {
    constructor(description, wheels) {
        this.description = description;
        this.wheels = wheels;
    }

    describeYourself() {
        console.log(
            `I am a ${this.description} with ${this.wheels} wheels.`
        )
    }
}

class SemiTruck extends Vehicle {
    constructor() {
        super('semi truck', 19);
    }

    vaibhav() {
        console.log("hello");
    }
}

let groceryStoreSemi = new SemiTruck();
groceryStoreSemi.vaibhav();