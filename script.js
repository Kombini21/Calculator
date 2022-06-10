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

//
//let n1 = parseInt(window.prompt("Escolha seu primeiro numero."));
//let n2 = parseInt(window.prompt("Escolha seu segundo numero."));
//let escolhaop = parseInt(window.prompt("Escolha entre as 4 operações.\n 1 - Soma, 2 - redução, 3 - multiplicação, 4 - divisão"));

//if (escolhaop == 1){

//    results = operate(n1,n2,addValues);
//    console.log(results);
    
    
//} else if (escolhaop == 2){
    
//    results = operate(n1,n2,reduceValues);
//    console.log(results);

//} else if (escolhaop == 3){

//    results = operate(n1,n2,multiplyValues);
//    console.log(results);

//} else if (escolhaop == 4){

//    results = operate(n1,n2,divideValues);
//    console.log(results);

//}
//





function operate(x1,x2,func){

    let x  = func(x1,x2);

    return x

}


let display = document.getElementById("result")


let nm1 = 0;
let nm2 = 0;
let numberswitch = 0;

function f1(objButton){  
    display.value = display.value + objButton.value;
}

function clean(){  
    display.value = "";
}


function maisbutton(){

    numberswitch = 1;
    nm1 = parseInt(display.value);
    console.log(nm1);
    clean();
}

function menosbutton(){

    numberswitch = 2;
    nm1 = parseInt(display.value);
    console.log(nm1);
    clean();
}

function vezesbutton(){

    numberswitch = 3;
    nm1 = parseInt(display.value);
    console.log(nm1);
    clean();
}

function divisbutton(){

    numberswitch = 4;
    nm1 = parseInt(display.value);
    console.log(nm1);
    clean();
}

function equalsbutton(){

    switch(numberswitch){

        case 1:
            nm2 = parseInt(display.value);
            results = operate(nm1,nm2,addValues);
            clean();
            display.value = results;
            break


        case 2:
            nm2 = parseInt(display.value);
            results = operate(nm1,nm2,reduceValues);
            clean();
            display.value = results;
            break

        case 3:
            nm2 = parseInt(display.value);
            results = operate(nm1,nm2,multiplyValues);
            clean();
            display.value = results;
            break

        case 4:
            nm2 = parseInt(display.value);
            results = operate(nm1,nm2,divideValues);
            clean();
            display.value = results;
            break

        default:
            console.log("não deu");
            break

        

    }



}
