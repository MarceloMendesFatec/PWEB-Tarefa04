function calc(op){

    num1 = parseFloat(document.getElementById("num1").value)
    num2 = parseFloat(document.getElementById("num2").value)
    let result = 0;
    
    switch(op)
    {
        case '+': result  = num1 + num2; break;
        case '-': result  = num1 - num2; break;
        case '*': result  = num1 * num2; break;
        case '/': result  = num1 / num2; break;
    }

    document.getElementById("output").value = result;

    let newOutput = num1 + " " + op + " " + num2 + " = " +result;

    document.getElementById("history").innerHTML += "<p>" + newOutput + "</p>";
    
    let list = document.getElementById("history");
    if(list.children.length > 10){
        document.getElementById("history").removeChild(list.childNodes[0]);    
    }
    
    
}


