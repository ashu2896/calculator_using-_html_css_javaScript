//add event///
function addBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("Output").innerHTML = parseInt(num1) + parseInt(num2);
}


function subBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("Output").innerHTML = num1 - num2;
}

function multiplyBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("Output").innerHTML = num1 * num2;
}

function divideBy() {
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("Output").innerHTML = num1 / num2;
}