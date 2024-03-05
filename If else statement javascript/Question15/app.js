var hourEntered =prompt("Enter the current hour in 24hours format");

if (6 <= hourEntered <= 9 ){
    console.log("Breakfast is served");
}
else if (11 <= hourEntered <= 13 ){
    console.log("Time for lunch");
}
else if (17 <= hourEntered <= 20 ){
    console.log("Its Dinner Time");
}
else{
    console.log("Sorry,you will have to wait,or go get a snack");
}