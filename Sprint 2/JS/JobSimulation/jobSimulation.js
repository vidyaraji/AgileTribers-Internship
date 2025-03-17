let num1=parseInt(prompt("Enter a Number 1:"));
let num2=parseInt(prompt("Enter a Number 2:"));
if(num1&num2>=0){
    let operation=prompt(`Addition:+ \n Subraction:- \n Division: / \n Multiplication: * \n 
        Enter The Operation:`);
    switch(operation){
        case "+":
            console.log(`Addition:`,num1+num2);
            break;
        case "-":
            console.log("Subraction: ",num1-num2);
            break;
        case "/":
            if(num2!=0){
                console.log("Division:",num1/num2);
                break;
            }
            else{
                console.log("Division with Zero is not possible");
            }  
            case "*":
                console.log("Multiplication:",num1*num2)  
        default:
            console.log("Enter Correct Operation");
    }
}
else{
    alert("Enter Numbers correctly");
}
