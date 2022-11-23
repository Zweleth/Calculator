let current = document.getElementById("current");
let previous = document.getElementById("prev");

let calculate = (num) => {
    if (eval(previous.value) == current.value) {
        if (isFinite(num)) {
            clr()
        }

        
    }
    current.value += num ;
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
    current.value=current.value.slice(0,-0);
}

function del() {
    current.value=current.value.slice(0,-1);
}

function answer() {
    
    previous.value = current.value;
    Ans();
    let operation = eval(current.value)
    current.value = operation
}

function sqrt() {

}