// 1. ES9 brings the nes object destructuring:
const animals = {
    bird: 42,
    tiger: 9,
    lion: 5
}

const {tiger, ...rest} = animals;
console.log(tiger);
console.log(rest);

// 2. Finally - promise finish action
// finnally will be executed regardless if the promise succedes or catch is triggered by an error
const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
];

Promise.all(urls.map(url => {
    return fetch(url).then(people => people.json())
})).then(array => {
    console.log(array)
    throw Error;
        console.log('1', array[0]);
        console.log('2', array[1]);
        console.log('3', array[2]);
        return array;
    }).catch(err => console.log(err))
    .finally(()=> console.log('extra action'))


// 3. for await of
// it is based on of looping method
const loopThroughUrls = url => {
    for(url of urls){
        console.log(url)
    }
};

loopThroughUrls(urls);

// in async
// ! important we use await keyword in front of a promise
const outsideOfPromise = [];
const getData2 = async function(){
    const arrayOfPromises = urls.map(url => fetch(url));
    for await (let request of arrayOfPromises){
        const data = await request.json();
        // console.log('get data 2 inside of promise ', data);
        outsideOfPromise.push(data)
    };

}

console.log('outside of promise', outsideOfPromise)
getData2();
console.log('done after get data 2')