
function appendValue(value){
    document.getElementById("display").value += value;
}

function clearScreen(){
    document.getElementById("display").value = "";
}

function calculate(){
    let input = document.getElementById("display").value;

    try{
        if(input === ""){
            throw "Enter Value";
        }

        let result = eval(input);

        if(!isFinite(result)){
            throw "Invalid Calculation";
        }

        document.getElementById("display").value = result;
    }
    catch(error){
        alert(error);
        clearScreen();
    }
}

function square(){
    let num = document.getElementById("display").value;

    if(num === "" || isNaN(num)){
        alert("Enter valid number");
        return;
    }

    document.getElementById("display").value = num * num;
}

function promptValue(){
    let num = prompt("Enter Number");

    if(num === null || num.trim() === "" || isNaN(num)){
        alert("Enter valid number");
        return;
    }

    document.getElementById("display").value = num;
}