// INTERPRETER

// + no need to compile before running
// + natual fit for JS

// - it is slower. In a loop the same code will be run many times. If there is a function inside a code it will get back to checking this function definition

// COMPILER
// + optimizes the code

// - longer to get up and running

// JIT COMPILER - just in time compiler
/**
 * Perser, AST and Interpreter are done normally.
 * Interpreter spits bytecode
 * Profiler watches code as it runs and checks how it can be optimized. Ie what types are run.
 * If some code is runa gain and again this is passed to compiler to optimize
 *
 * Trivia: v8 compiler is called turboFan
 */
