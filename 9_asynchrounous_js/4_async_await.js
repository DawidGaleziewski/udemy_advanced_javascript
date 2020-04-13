// Async await is part of es8 and is build on top of promisses
// Asyn function under the hood returns a promise
// Async await is just a syntax sugar for Promises

function movePlayer(distance, direction){
    var movment = 'player was moved ' + distance + ' to the ' + direction;
    console.log(movment);
    return movment;
};

// promise version
// movePlayer(100, 'Left')
//     .then(() => movePlayer(500, 'Right'))
//     .then(()=> movePlayer(10, 'Top'))
//     .then(()=> movePlayer(56, 'Down'));


// async await version
// The goal of async await is to make code that is async look like it is synchronous

// 1 function is declared as async function. Only then we have access to await keyword
async function playerStart(){
    
    // await keyword states that the function needs to be paused until we have something for it
    // 2 await needs to be placed in front of the function that returns a promise
    await movePlayer(500, 'Top'); //pause
    await movePlayer(40, 'Right'); //pause
    await movePlayer(78, 'Bottom'); // pause

    // benefit is that we can store now the outcome of the function inside the variable
    const firstMove = await movePlayer(200, 'Left'); //pause
}

playerStart()

// More realistic example
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(console.log)

async function fetchUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users'); // iT will pause untill the fetch gets the data
  const data = await response.json(); //it will pause and wait for the promise
  console.log(data)
}

fetchUsers();

// Async await on multiple urls
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/albums",
  "https://jsonplaceholder.typicode.com/posts"
];

const getData = async function(){
  try { //In async method we will need to use try catch for error controll
    const [users, posts, albums] = await Promise.all(urls.map(url => fetch(url).then(resp => resp.json())
    ));
  
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch(error){
    console.log(error)
  }

}

getData()