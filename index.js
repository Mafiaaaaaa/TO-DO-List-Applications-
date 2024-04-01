#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n\tWelcome to Shaheer's TO DO List Application\n");
while (conditions) {
    let addTask = await inquirer.prompt([
        {
            name: "Task",
            type: "input",
            message: "Enter your new task"
        }
    ]);
    todoList.push(addTask.Task);
    console.log(`Your ${addTask.Task} Task Added In Your TO DO List.`);
    let newTask = await inquirer.prompt([
        {
            name: "New_Task",
            type: "confirm",
            message: "Do You Want to Add New Task",
            default: "False"
        }
    ]);
    conditions = newTask.New_Task;
}
console.log(`Your New TO DO List is ${todoList}`);
