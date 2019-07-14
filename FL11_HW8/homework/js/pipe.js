function addOne(x){
    return x + 1;
}

function pipe(){
    let num = 0;
    for (let i = 1; i < arguments.length; i++){
        i === 1 ? num += arguments[i](arguments[0]) : num = arguments[i](num);
    }
    return num;
}

pipe(2, addOne);