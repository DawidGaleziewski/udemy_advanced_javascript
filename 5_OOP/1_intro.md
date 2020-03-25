# Goals of OOP section is to create code that is:
- Clear + understandable
- Easy to extand
- Easy to Maintain
- Memory Efficient
- DRY
 

 Before OOP and FP we had procedural programing: storing and manipulating data. It was without much structure

 # OOP vs FP

 ## OOP
 Bringing together data and behaviour and putting it into objects helps us understand the program.

Analogy: like a robot. We create head, torso, limbs and assembly those together

IN OOP we model real lifo objects into programing objects
Prototypes are base in JS for its OOP

```javascript
// We want to organize world into boxes.
let dragon = {
    name: 'Drogo' // Object will hold data, aka state 
    fire: function(){ // Object will have methods that can modify the state ofobjects
        return "Smoosh!!"
    }
}
```

### There are two types of OOP languages:
- class based
- prototype based

 ## FP
 Data and behaviour are two diffrent things, it should be kepts seperate.

 Analogy: like a pipe, data flows thru the pipe and gets modified

 Closures are the base for FP

