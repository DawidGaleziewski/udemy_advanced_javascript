// #1. ENCAPSULATION
/** Organizing everything into objects, units of data
 * Wrapping code into boxes related to each other 
 * Forcing objects to interact with each other using methods provided for them
 * 
 * This makes code more maintainable
 */

//  #2. ABSTRACTION
/** Hinding the complexity from the user
 * Creating simplicity so that we can operate inistanciating the classes
 * "Here are the methods you can use to do something, do not worry about what is happening behind the scenes"
 * 
 * Helps reduce complexity of the code
 */

//  #3. INHERITANCE
/**
 * By inheriting the other classes, we can avoid re-writting the same code
 * Save memory space
 */

 // #4 POLIMORPHISM
 /**
  * Many forms
  * Idea is that we can call same method, on many objects and each of them will respond in the same way
  */

  class Character {
      constructor(name, wepaon){
          this.name = name;
          this.wepaon = wepaon;
      }
  }

  class Elf extends Character{
      constructor(name,wepaon){
          super(name,wepaon);
      }

      attack(cry){ //Attack will behave in diffrent way on Elf instances then on Ogre instances
          return "attack with " + cry
      }
  }


  class Ogre extends Character {
      constructor(name,wepaon){
          super(name, wepaon)
      }

      attack(){ // In this instance polimorhysm refers to overwritting methods.
          return "argghh!"
      }
  }
//   Polimorhysm helps us process the object difrently depending on their datatype/class