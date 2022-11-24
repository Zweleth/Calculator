let current = document.getElementById("current");
let previous = document.getElementById("prev");
let allowComa = true;
let allowOp = false;
let clrPrev = false;
let lastOp = "" ;

let addToSum = (num) => {
    if (eval(previous.value) == current.value) {
        if (isFinite(num) || (num==".")) {
            clr()
        }

        
    }
    current.value += num ;
    lastOp += num;
    allowOp = true;
    clrPrev = false;
}

let addToSumComa = (num) => {
    if (allowComa === true) {
        if (eval(previous.value) == current.value) {
            if (num==".") {
                clr()
            }
    
            
        }
        current.value += num ;
        allowComa = false;
        clrPrev = false;
    }
}

let addToSumDiv = (num) => {
    if (allowOp === true) {
        current.value += num;
        lastOp = "";
        lastOp += num;
        allowComa = true ;
        allowOp = false;
        clrPrev = false;
    }
    
}

let addToSumPlus = (num) => {
    if (allowOp === true) {
        current.value += num;
        allowComa = true ;
        allowOp = false;
        clrPrev = false;
        lastOp = "";
        lastOp += num;
    }
    
}

let addToSumMin = (num) => {
    if (allowOp === true) {
        current.value += num;
        allowComa = true ;
        allowOp = false;
        clrPrev = false;
        lastOp = "";
        lastOp += num;
    }
    
}

let addToSumMul = (num) => {
    if (allowOp === true) {
        current.value += num;
        allowComa = true ;
        allowOp = false;
        clrPrev = false;
        lastOp = "";
        lastOp += num;
    }
    
}

let Ans = () => {
    try{
        current.value = eval(current.value)
    }
    catch(err) {
        current.value = "Err";
        previous.value ="";
    }
}

function clr() {
    if (clrPrev === true) {
        previous.value=previous.value.slice(0,-0)
    }
    current.value=current.value.slice(0,-0);
    allowComa = true ;
    clrPrev = true;
    clrPrev === true;
    

}

function del() {
    current.value=current.value.slice(0,-1);
}

function answer() {
    if (eval(previous.value) == current.value) {
        
        current.value = eval(current.value+=lastOp);
        previous.value = current.value+=lastOp;
    }
    previous.value = current.value;
    Ans();
    let operation = eval(current.value)
    current.value = operation
    allowComa = true ;
    clrPrev = false;
    

}

function sqrt() {

}