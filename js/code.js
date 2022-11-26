let current = document.getElementById("current");
let previous = document.getElementById("prev");
let allowComa = true;
let allowOp = false;
let clrPrev = false;
let lastOp = "" ;
let ops = ['+','-','*','/']

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
    let comaNum = countComa();
    let opsNum = countOps();
    if (comaNum <= opsNum) {
        allowComa = true;
        allowComa = isLastComa();
    }
    else{
        allowComa = false;
    }
    
    
    
        
    
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
    allowOp = isLastOp();
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
    allowOp = isLastOp();
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
    allowOp = isLastOp();
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
    allowOp = isLastOp();
    // if (allowOp === false) {
    //     alert(current.)
    // }
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
        previous.value = current.value+=lastOp;
        Ans();
        let operation = eval(current.value)
        current.value = operation;
        allowComa = true ;
        clrPrev = false;
        
    }
    else {
        previous.value = current.value;
        Ans();
        let operation = eval(current.value)
        current.value = operation
        allowComa = true ;
        clrPrev = false;
        
    }
    
    
    

}


function countOps() {
    let count = 0;
    for (let i = 0; i< current.value.length; i++){
        for (let x=0; x< ops.length; x++){
            if (current.value[i].includes(ops[x])){
                count++;
            }
        }    
    } 
    return (count);
}

function countComa() {
    let count = 0;
    for (let i = 0; i< current.value.length; i++){
        if ((current.value[i]).includes('.')) {
            count++;
        }
    }
    return (count);
}

function isLastOp() {
    let a = (current.value.length - 1);
    let count = 0;
    for (let x=0; x< ops.length; x++)   {
        if ((current.value[a]).includes(ops[x])) {
            count++;
        }
        
    }
    if (count === 0) {
        return true;
    }
    if (count > 0){
        return false;
    }
}

function isLastComa() {
    let a = (current.value.length - 1);
    if ((current.value[a]).includes('.') ) {
        return false;
    }
    else {
        return true;
    }
}
  
