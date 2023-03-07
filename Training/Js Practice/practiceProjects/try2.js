let user = prompt("Enter Snake,Water OR Gun");
let cpui = Math.floor(Math.random() * 3);
let cpu = ["Snake", "Water", "Gun"][cpui];
// console.log(cpu);

const match = (cpu, user) => {
  if (cpu == user) {
    return "Nobody.It is a tie";
  } else if (cpu === "Snake" && user === "Water") {
    return "cpu";
  } else if (cpu === "Snake" && user === "Gun") {
    return "user";
  } else if (cpu === "Water" && user === "Snake") {
    return "user";
  } else if (cpu === "Water" && user === "Gun") {
    return "cpu";
  } else if (cpu === "Gun" && user === "Water") {
    return "user";
  } else if (cpu === "Gun" && user === "Snake") {
    return "cpu";
  }
};

let result = match(cpu, user);

document.write(`Cpu : ${cpu}  User : ${user} <br> The winner is ${result.toUpperCase()}`);
