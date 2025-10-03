"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getNombre() {
            return this.name;
        }
    };
    console.log(flash);
})();
(() => {
    class Mutant {
        constructor(age, name, realName) {
            this.age = age;
            this.name = name;
            this.realName = realName;
        }
        mutantPower(id) {
            return this.name + ' ' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: "Marco",
        age: 29,
        address: {
            id: 125,
            zip: 'KYW SUD',
            city: 'Otawa'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
    const client2 = {
        name: "Erika",
        age: 26,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'KYW SUD'
        },
        getFullAddress(id) {
            return this.address.city;
        }
    };
})();
(() => {
    let addNumberFunctions;
    addNumberFunctions = (a, b) => {
        return a + b;
    };
})();
