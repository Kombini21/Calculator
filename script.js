function addValues(...args){

    narray = [...args]
    const narraySum = narray.reduce( (total, num) => parseInt(total) + parseInt(num), 0);
    return narraySum
}

function reduceValues(...args){

    narray = [...args]
    const narraySum = narray.reduce( (total, num) => parseInt(total) - parseInt(num), (narray[0]*2));
    return narraySum
}


function multiplyValues(...args){

    narray = [...args]
    const narraySum = narray.reduce( (total, num) => parseInt(total) * parseInt(num));
    if (typeof(narray[1]) === "undefined" ){
        return "Error, put more than 1 number"
    }
    return narraySum
}


function divideValues(...args){

    narray = [...args]
    const narraySum = narray.reduce( (total, num) => parseInt(total) / parseInt(num));
    if (typeof(narray[1]) === "undefined" ){
        return "Error, put more than 1 number"
    }
    return narraySum
}

//////////////////////////////////////////////////////////////////////////////


let n1 = parseInt(window.prompt("Escolha seu primeiro numero."));
let n2 = parseInt(window.prompt("Escolha seu segundo numero."));
let escolhaop = parseInt(window.prompt("Escolha entre as 4 operações.\n 1 - Soma, 2 - redução, 3 - multiplicação, 4 - divisão"));

if (escolhaop == 1){

    results = operate(n1,n2,addValues);
    console.log(results);
    
    
} else if (escolhaop == 2){
    
    results = operate(n1,n2,reduceValues);
    console.log(results);

} else if (escolhaop == 3){

    results = operate(n1,n2,multiplyValues);
    console.log(results);

} else if (escolhaop == 4){

    results = operate(n1,n2,divideValues);
    console.log(results);

}






function operate(x1,x2,func){

    let x  = func(x1,x2);

    return x

}