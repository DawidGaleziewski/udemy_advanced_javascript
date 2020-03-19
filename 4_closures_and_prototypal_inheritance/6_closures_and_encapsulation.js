// Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return 'boom';
    }

    setInterval(passTime, 1000)

    return {
        //! launch: launch, //! We can decide which functions we can run from outside and which not. We can hide the information that should not been seen
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime(); // Need to run in dev tools
ohno.launch() // Need to run in dev tools
// We are now storing the values of those variables inside the function

// Encapsulation fallows the rule of "least privilage". We give only as much power to user as he needs and not more. Some data should not been exposed. 

// Modular patterns and IIFES work this way thanks to closures!