

function isLeapYear(year) {
    if (
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    )
        console.log(" Input year:", year, "is a Leap Year");
    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}
var inputYear= prompt("Enter year");
isLeapYear(inputYear);




