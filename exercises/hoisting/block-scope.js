function loop1() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final var', i);
}

loop1();

function loop2() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final let', i); // i is not defined as it is outside the block scope
}

loop2();
