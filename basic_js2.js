// It will come undefined because this has a global scope and it is used with arrow function where it gives the variable undefined value
// const person = {
//     name: 'Max',
//     age : '29',
//     greet: () => {
//         console.log('Hi, I am ' + this.name);
//     }
// };

// 1st way of defining the function so that it takes the name from local scope
// const person = {
//     name: 'Max',
//     age : '29',
//     greet: function() {
//         console.log('Hi, I am ' + this.name);
//     }
// };


// 2nd way 
const person = {
    name: 'Max',
    age : '29',
    greet(){
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();


