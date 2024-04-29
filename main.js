import inquirer from "inquirer";
let cpuI = Math.floor(Math.random() * 3);
let cpu = ["Rock", "Paper", "Scissors"][cpuI];
let user = await inquirer.prompt({
    name: "prompt",
    type: "list",
    choices: ["Rock", "Paper", "Scissor"],
});
if (cpu === user.prompt) {
    console.log("The Game Has Tied");
}
else if (cpu === "Rock" && user.prompt === "Paper") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is User");
}
else if (cpu === "Paper" && user.prompt === "Rock") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is CPU");
}
else if (cpu === "Scissor" && user.prompt === "Rock") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is User");
}
else if (cpu === "Rock" && user.prompt === "Scissor") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is CPU");
}
else if (cpu === "Paper" && user.prompt === "Scissor") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is User");
}
else if (cpu === "Scissor" && user.prompt === "Paper") {
    console.log(`CPU is: ${cpu} \nUSER is: ${user.prompt}`);
    console.log("The Winner is Cpu");
}
