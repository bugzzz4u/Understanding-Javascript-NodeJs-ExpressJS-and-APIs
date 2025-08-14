const hobbies = ['Sports','Cooking'];
for (let hobby of hobbies){
    console.log("Hobby:",hobby);
}

console.log(hobbies.map(hobby => 'Hobby: '+ hobby));
console.log('Hobby: ', hobbies);

hobbies.push('Programming');
console.log(hobbies);

// Rest and Spread Operators
const copiedArray = hobbies.slice();
console.log("copiedArray: ",copiedArray);

//Problem: When we copy the elements inside hobbies, the output gives one array in another array
// const copiedArray1 = [hobbies];
// console.log('copiedArray1: ', copiedArray1);

// Spread [...] (Why to use it?) Sol: ... operator is kept before the variable of which the element needs to be coppied and is kept inside that element in which we want the ouput such as [] here.
const copiedArray1 = [...hobbies];
console.log('copiedArray1 : ', copiedArray1);

//Problem: When we define a set of number of argument, it is not flexible if we want to add more
// const toArray = (arg1, arg2, arg3) => {
//     return (arg1, arg2, arg3);
// }
// console.log(1,2,3);


//Rest[...] used in argument list of a function so that the problem of merge doesnt occur
const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4));