
// second pase

function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return function namedFun(){
    }
}


function returnsAnAnonymousFunction(){
   return function () {
    exerciseRoutine(() => console.log("Stretch! Work that core!"));
   }
}



// function greeting(name) {
//     alert('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);





// first pass




// // The receivesAFunction function should:

// // take a callback function as an argument
// // call the callback function
// // it doesn't matter what this function returns, so long as it calls the callback function

// function receivesAFunction(callBack){
//     callBack()
// }


// // The returnsANamedFunction function should:

// // take no arguments
// // return a named function


// function returnsANamedFunction(){
//     return returnsANamedFunction     
// }

// // The returnsAnAnonymousFunction function should:
// // take no arguments
// // return an anonymous function




// function returnsAnAnonymousFunction(){
//    return function () {
//     exerciseRoutine(() => console.log("Stretch! Work that core!"));
//    }