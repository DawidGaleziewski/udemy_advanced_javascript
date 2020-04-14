// When having couple of promises We can handle those in 3 diffrent ways:

//  parallel - run all at the same time

// sequencial - i.e run the first one, if it succeds run the second one and if this one succeds run the last one

// race - start all of them but whichever one comes first do that one and ignore the rest


const promisify = (item, delay) => new Promise((resolve)=> setTimeout(()=> {
    return resolve(item)
},delay))

// promisify('test', 5000);


const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
// console.log(a(), b(), c())

// 1. PARALLEL
async function parallel(){
    const promises = [a(), b(), c()]; //Array of promisses
    // Very common pattern for running promises in parallel
    const [output1, output2, output3] = await Promise.all(promises);
    return `parallel is done: ${output1}, ${output2}, ${output3}`;
}



// 2. RACE - first one wins, rest is dicarded
async function race(){
    const promises = [a(), b(), c()];
    // race is udsed to select the quickest promise
    const output1 = await Promise.race(promises);
    return `race is done: ${output1}`;
}


// 3. SEQUENCE - we simply use await and add those values to variables
async function sequence(){
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done ${output1} ${output2} ${output3}`;
}

// It does not matter in what order we put those. then will be run when we recive a promise
sequence().then(data=> console.log(data));
race().then((data)=> console.log(data));
parallel().then(data => console.log(data));
