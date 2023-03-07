// Node.js program to demonstrate the	
// path.dirname() method
	
// Import the path module
import { dirname } from 'path';
import chalk from "chalk";

console.clear();
// Complete file path
const path1 = dirname("/var/home/axelor/HD_projects/nodejs/index.js");
console.log(chalk.red(path1));

