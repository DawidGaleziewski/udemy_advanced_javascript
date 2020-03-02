var b = {
  name: 'jay',
  say() {
    console.log(this);
  }
};

b.say(); // Runs from b object therefore returns b object

var c = {
  name: 'jay',
  say() {
    return function() {
      console.log(this);
    };
  }
};

c.say()(); // Due to dynamic scope of this in a function it will return window object

var d = {
  name: 'jay',
  say() {
    return () => console.log(this);
  }
};

d.say(); // Arrow function changes scope from dynamic to lexical. Therefore now it matters where this is lexically. Will return the  d object

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  }
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);

//How Would you fix this?
console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
