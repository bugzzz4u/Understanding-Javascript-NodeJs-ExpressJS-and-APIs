// var name = 'Max';
// var age = 29;
// var hasHobbies = true;

// function summarizeUser(userName, userAge, userHasHobby){
//     return ('Name is ' + userName + ', age is ' + userAge + ', has hobby:' + userHasHobby );
// }
// console.log(summarizeUser(name,age, hasHobbies));


const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;
// function summarizeUser(userName, userAge, userHasHobby){
//     return ('Name is ' + userName + ', age is ' + userAge + ', has hobbies:' + userHasHobby );
// }

const  summarizeUser = (userName, userAge, userHasHobby) => {
    return ('Name is ' + userName + ', age is ' + userAge + ', has hobbies:' + userHasHobby );
};

// Another way of writing the function
const add = (a,b) => a+b;
console.log(add(1,2));

console.log(summarizeUser(name,age, hasHobbies));