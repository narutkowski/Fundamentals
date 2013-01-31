function addTwoNumbers(a,b) { //we are declaring variables a & b

	var result = a + b;
	alert(result);
} 

addTwoNumbers(5,10);// 5 & 10 are our arguments
addTwoNumbers(6,20);
addTwoNumbers(200,100);

//instead of using alert we can use return, which will store the value of a + b in a variable
function addTwoNumbers(a,b) { //we are declaring variables a & b

        var result = a + b;
        return result;
}

var x = addTwoNumbers(5,10);// 5 & 10 are our arguments, result of function will be stored in var x
var y = addTwoNumbers(6,20);
var z = addTwoNumbers(200,100);

