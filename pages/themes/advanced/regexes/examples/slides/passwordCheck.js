// A valid password is:
// 1. at least 6 symbols
// 2. must contains letters [a-zA-Z] AND digits [\d] AND symbols [!@#$%^&*]

const passwords = [
	'alabala', 	// false
	'alaba#a', 	// false
	'alaba9a', 	// false
	'a1aba#9', 	// true
	'a1@', 		// false
];

const re = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;

passwords.forEach(str=>{
	let matched = re.test(str);
	console.log(`'${str}' => ${matched}`)
});
