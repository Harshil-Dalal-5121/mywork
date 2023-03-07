// Node.js program to demonstrate the
// cipher.final() method

// Importing crypto module
// import { scrypt, createCipheriv } from 'crypto';

// // Creating and initializing algorithm and password
// const algorithm = 'aes-192-cbc';
// const password = 'Password used to generate key';

// // Getting key for cipher object
// scrypt(password, 'salt', 24,
// 	{ N: 512 }, (err, key) => {

// 		if (err) throw err;

// 		// Creating and initializing the static iv
// 		const iv = Buffer.alloc(16, 0);

// 		// Creating and initializing the cipher object
// 		const cipher = createCipheriv(algorithm, key, iv);

// 		// Getting buffer value
// 		// by using final() method
// 		let value = cipher.final('hex');

// 		// Display the result
// 		console.log("buffer :- " + value);
// 	});

// Node.js program to demonstrate the
// crypto.getCiphers() method

// Including crypto module
import { getCiphers } from 'crypto';

// Calling getCiphers method
const cipher = getCiphers();

// Prints all the algorithms associated with ciphers
console.log("The list of algorithms are as follows: ", cipher);


