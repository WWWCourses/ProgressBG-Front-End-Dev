/* -------------------------------------------------------------------------- */
/*                        create an object shallow copy                       */
/* -------------------------------------------------------------------------- */

// let user1 = {
//     name: "Maria",
//     age: 33,
// 	colors:["red","green"]
// }

/* ----------------------- with Object.assign() method ---------------------- */
// let user2 = Object.assign({}, user1);

/* -------------------------- with spread operator -------------------------- */
// let user2 = {...user1};

// // we change a value in "user1", and that WILL NOT reflect the "user2" object:
// user1.name = "Pesho";
// console.log(`user1: ${user1.name}`);
// console.log(`user2: ${user2.name}`);


/* -------------------------------------------------------------------------- */
/*                       create deep (clone) object copy                      */
/* -------------------------------------------------------------------------- */
let user1 = {
    name: "Maria",
    age: 33,
	colors:["red","green"]
}
let user2 = JSON.parse(JSON.stringify(user1));

user1.colors[0] = "black";
console.log(user2.colors);