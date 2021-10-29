
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}!!`);
    }
}

class Student extends Person {
    constructor (name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from ${this.level}!!!!`);
    }
}

const o1 = new Person ('Marc');
const o2 = new Student ('Ana', '3rd Level');
const o3 = new Student ('Gatinha', '5th Level');

o1.greet();
o2.greet();
o3.greet();