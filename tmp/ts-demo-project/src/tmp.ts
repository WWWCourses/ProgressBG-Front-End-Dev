// lastName as optional parameters:
function greet(firstName: string, lastName?: string) {
    return lastName? `${firstName} ${lastName}`: firstName;
}

console.log( greet('Ada', 'Byron') );
console.log( greet('Ada') );