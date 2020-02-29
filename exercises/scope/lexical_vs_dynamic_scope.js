// FIRST EXAMPLE:
// window
// window
// c{}

const a = function() {
  console.log('original a', this);
  const b = function() {
    console.log('original b', this);
    const c = {
      hi: function() {
        console.log('original c', this);
      }
    };
    c.hi(); // It maters not where function is defined but what objects calls it!
  };
  b();
};

a();

// SECOND EXAMPLE:

const obj = {
  name: 'Billy',
  sing() {
    console.log('a', this);
    var anotherFunc = function() {
      console.log('b', this);
    };
    anotherFunc();
  }
};

obj.sing(); //Logs: billy and window
//! This is due to fact that javascript is lexicaly scoped, except THIS keyword. This is dynamically scoped. It does not matter how it was defined it matters how it was called.
// In this case obj did not called the anotherFunc() function, it was called by sing() function. Therefore this  refered to its default value: window object

// !AVOIDING THIS PITFAL:
// A) ES6 arrow function = changing THIS into lexical scoped object
const objES6Fix = {
  name: 'Billy',
  sing() {
    console.log('es6fix a', this);
    // ES6 arrow function has a lexically bound this. It will take under consideration what object surrounds the function lexically and not like in ES5 what object did call it
    var anotherFunc = () => {
      console.log('es6fix b', this);
    };
    anotherFunc();
  }
};

objES6Fix.sing();

// B) bind() methid
const objBindFix = {
  name: 'Billy',
  sing() {
    console.log('bind fix a', this);

    var anotherFunc = function() {
      console.log('bind fix b', this);
    };
    // we bind THIS keyword to the function in the scope that we have desired this state
    return anotherFunc.bind(this);
  }
};

objBindFix.sing()(); //We need to invoke the  function after it is returned.

// C) put this in another variable referance

const objSelfFix = {
  name: 'Billy',
  sing() {
    console.log('self fix a', this);

    // fix by create the referance to this while it is still inside the objec. We can use it as any other variable
    var self = this;
    var anotherFunc = function() {
      console.log('self fix b', self);
    };

    anotherFunc();
  }
};

objSelfFix.sing();
