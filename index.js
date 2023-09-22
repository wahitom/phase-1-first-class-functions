function receivesAFunction(callback){
    return callback();
}

//console.log(receivesAFunction())

function returnsANamedFunction(){
    const quote = "I am a named function"
    function namedFunction(){
        return quote; 
    }

    return namedFunction;
}
console.log(returnsANamedFunction()());

function returnsAnAnonymousFunction(){
    const quote2 = "this is an anonymous function"
    return function(){
        return quote2
    }
}

console.log(returnsAnAnonymousFunction()())


