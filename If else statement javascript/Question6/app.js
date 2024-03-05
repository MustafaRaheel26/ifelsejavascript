function check(ch) {
    if (ch >= "A" && ch <= "Z")
      console.log(ch + 
      " is an UpperCase character");
    else if (ch >= "a" && ch <= "z")
      console.log(ch +
      " is an LowerCase character");
    else console.log(ch + 
    " is a number");
  }

  var ch = prompt("Enter Any Character");
  check(ch);
