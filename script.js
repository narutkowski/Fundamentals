var grade = "Premium";

if ( grade === "Regular") {
     alert("It's $3.15");
}
if ( grade === "Premium") {
     alert("It's $3.35");
}
if ( grade === "Diesel") {
     alert("It's $3.47");
}

//instead of using the above if statements, we can use a switch statement

var grade = "Premium";

switch (grade) {
	case "Regular":
		alert("It's $3.15");
		break; //will jump us out of the switch statement
	case "Premium":
		alert("It's $3.35");
		break;
	case "Diesel":
		alert("It's $3.47");
		break;
	default:
		alert("That's not a valid grade");
}

