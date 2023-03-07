// Node.js program to demonstrate the
// dns.resolveSoa() method

// Accessing dns module
// import { getServers } from "dns";

// // Reading IP address of the current host
// // and printing it to the console
// console.log(getServers());

// Node.js program to demonstrate the
// dns.resolveSoa() method

// Accessing dns module
import { getServers } from 'dns';

// Reading IP address of the current host
// and printing it to the console
console.clear()
const res = getServers();

res.forEach(element => {
    console.log(element);
});



