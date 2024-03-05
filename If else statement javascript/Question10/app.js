var enteredPassword =prompt("Enter your password");
var samplePassword =("password1234");

if (enteredPassword === samplePassword){
    console.log("Correct! The password you entered matches the original password");
}
else if (enteredPassword == 0){
    console.log("Please enter your password");
}
else{
    console.log("The given password is not correct");
}