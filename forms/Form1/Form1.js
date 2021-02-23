let myState = prompt("enter a two-letter, capitalized state");
let myTemp = prompt ("enter the current outside temperature in Fahrenheit");
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat, and gloves. Maybe a scarf too."]
let myName = "Mary";

if (myState = "NE" && myTemp < 32) {
    alert(`${myName}, ${messages[0]}`);
} else if (myState = "NE" && myTemp >= 32 && myTemp <= 50) {
    alert(`${myName}, ${messages[1]}`);
} else if (myState = "FL" && myTemp >= 32 && myTemp <= 50) {
    alert(`${myName}, ${messages[2]}`);
} else if (myState = "FL" && myTemp > 50 && myTemp <= 70) {
    alert(`${myName}, ${messages[3]}`);
}
