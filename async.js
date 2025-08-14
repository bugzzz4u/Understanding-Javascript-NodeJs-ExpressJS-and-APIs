setTimeout(() => {
    console.log('Timer is done!');
},3);

console.log("Hello");

// Callback 
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    },1500);
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData(text => {
        console.log(text);
    });
},2000);


// More optimized way is Promise

const fetchData1 = () => {
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve('Done!');
        },1500);   
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData1()
    .then(text => {
        console.log(text);
        return fetchData1();
    })
    .then(text2 => {
        console.log(text2);
        return fetchData1();
    });
},2000);