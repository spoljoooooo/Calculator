// GLOBAL DYNAMIC VARS

let CURRENT = "";
let CURRENT_STRING = "";
let CURRENT_OPERATION = "";

// SCREEN

let currentResult = document.querySelector(".calCurrentResult");
let currentOperation = document.querySelector(".calCurrentOperations");

currentResult.innerHTML = CURRENT;

// OPERATIONS 

function add(a, b) {
    return (Number(a) + Number(b));
};

function subtract(a, b) {
    return (Number(a) - Number(b));
}

function mult(a, b) {
    return (Number(a) * Number(b));
}

function divade(a, b) {
    return (Number(a) / Number(b)).toFixed(2);
}

function doMath() {
    if (CURRENT_OPERATION == "+") {
        CURRENT = add(CURRENT, CURRENT_STRING);
    }

    if (CURRENT_OPERATION == "-") {
        CURRENT = subtract(CURRENT, CURRENT_STRING);
    }

    if (CURRENT_OPERATION == "*") {
        CURRENT = mult(CURRENT, CURRENT_STRING);
    }

    if (CURRENT_OPERATION == "/") {
        CURRENT = divade(CURRENT, CURRENT_STRING);
    }
}

function isTherePoint() {
    for (let i = 0; i < CURRENT_STRING.length; i++) {
        if (CURRENT_STRING.charAt(i) == ".") {
            return false
        }
    }

    return true
}

// BUTTONS

let numButtons = document.querySelectorAll(".num");
let operations = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let deleteButton = document.querySelector(".delete");
let point = document.querySelector(".point");

numButtons.forEach(num => {
    num.addEventListener("click", e => {
        CURRENT_STRING = CURRENT_STRING + (e.target.outerText);
        currentOperation.innerHTML = CURRENT_STRING;
    });
});

operations.forEach(oper => {
    oper.addEventListener("click", e => {
        if (CURRENT == "") {
            CURRENT = CURRENT_STRING;
            currentResult.innerHTML = CURRENT;
            CURRENT_OPERATION = e.target.outerText;
            CURRENT_STRING = "";
            currentOperation.innerHTML = CURRENT_STRING;
        } else if (e.target.outerText == "=") {
            doMath();
            currentOperation.innerHTML = CURRENT;
            CURRENT = "";
            CURRENT_STRING = "";
            CURRENT_OPERATION = "";
            currentResult.innerHTML = CURRENT;
        } else {
            doMath();
            currentResult.innerHTML = CURRENT;
            CURRENT_OPERATION = e.target.outerText;
            CURRENT_STRING = "";
            currentOperation.innerHTML = CURRENT_STRING;
        };
    });
});

clear.addEventListener("click", e => {
    CURRENT = "";
    CURRENT_STRING = "";
    CURRENT_OPERATION = "";
    currentResult.innerHTML = CURRENT;
    currentOperation.innerHTML = CURRENT_STRING;
});


deleteButton.addEventListener("click", e => {
    CURRENT_STRING = CURRENT_STRING.slice(0, -1);
    currentOperation.innerHTML = CURRENT_STRING;
});

point.addEventListener("click", e => {
    if (isTherePoint()) {
        CURRENT_STRING = CURRENT_STRING + ".";
    }
    currentOperation.innerHTML = CURRENT_STRING;
});