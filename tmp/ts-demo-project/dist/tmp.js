"use strict";
// lastName as optional parameters:
function greet(firstName, lastName) {
    return lastName ? `${firstName} ${lastName}` : firstName;
}
console.log(greet('Ada', 'Byron'));
console.log(greet('Ada'));
