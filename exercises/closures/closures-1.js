// Make sure that initialize can be initialized only once
let view;
function initialize(){
    view ='Mountains';
    console.log('view has been set');

    return function(){
        console.log('view is eq' + view)
        return view;
    }
}

const getView = initialize();
getView();
getView();
getView();

// singleton method
function initializeRefined(){
    let called = false; //this cannot be accesed, once set it is in the memory

    return function(){
        if(!called){
            view = "Sea";
            console.log(called)
            console.log('Refined view was called')
            called = true
        } else {
            console.log('Refined view cannot be called')
        }
    }  
}

const callOnce = initializeRefined();
callOnce()
callOnce()
callOnce()