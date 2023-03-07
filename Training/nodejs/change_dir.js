import chalk from "chalk";

console.log(`Current Directory path is ${chalk.red(process.cwd())}`);

process.chdir("../");
console.log(
  "Working directory after changing directory is ",
  chalk.green(process.cwd())
);
