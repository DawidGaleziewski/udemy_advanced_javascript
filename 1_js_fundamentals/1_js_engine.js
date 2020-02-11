// JS uses v8 engine

// Engine is sort of translator. Tells PC what to do with js code

// v8 understands javascript
// There are many javascript engines, called ECMAScript languages: chakra, spidermonkey, inScrpit..

// Way engine works:

// 1. Parser - divide text based on keywords

// 2. AST - Create AST - Abstract syntax tree

// 3. Interpreter - will go line by line and interprete the code.

// Here the interpreter will recognize the function, after that it will go to the function in each loop
function add(x, y) {
  return x + y;
}

for (let i = 0; i < 10; i++) {
  add(1 + i);
}

// 4. Profiler

// 5. Compiler - unlike interpreter it creates a translation of the code ahead of time.

// Compiler first tries to understand the language and after that it spits new code that will be its own program.

// 6. Optimized code

// JS engine sudo code
function jsengine(code) {
  return code.split(/\s+/);
}

console.log(jsengine('var a = 5'));

//! It is important to remember there are two ways of running js code: interpreter and compiler
