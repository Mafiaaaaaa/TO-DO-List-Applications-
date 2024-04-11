#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true || false;
console.log(chalk.bold.italic.yellow("\n\tWelcome to Shaheer's TO DO List Application\n"));
let main = async () => {
    while (conditions) {
        let frontPage = await inquirer.prompt([
            {
                name: "Options",
                type: "list",
                message: "Please select from the options given below",
                choices: ["Add Task", "Delete Task", "Edit Task", "View Tasks", "Exit"]
            }
        ]);
        if (frontPage.Options === "Add Task") {
            await addTask();
        }
        else if (frontPage.Options === "Delete Task") {
            await deleteTask();
        }
        else if (frontPage.Options === "Edit Task") {
            await editTask();
        }
        else if (frontPage.Options === "View Tasks") {
            await viewTask();
        }
        else if (frontPage.Options === "Exit") {
            conditions = false;
        }
    }
};
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "newtask",
            type: "input",
            message: "Please Enter your new Task"
        }
    ]);
    todoList.push(newTask.newtask);
    console.log(chalk.green(`\n${newTask.newtask} Task added Successfully\n`));
};
let deleteTask = async () => {
    await viewTask();
    let deleteIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Please Enter the Number of the Task you want to Delete"
        }
    ]);
    let deleteTask = todoList.splice(deleteIndex.index - 1, 1);
    console.log(chalk.red(`\nTask ${deleteIndex.index - 1} has been Deleted from your List`));
};
let editTask = async () => {
    await viewTask();
    let editIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Please Enter the Number of the Task you want to Edit "
        },
        {
            name: "editedTask",
            type: "input",
            message: "Your Edited Task: "
        }
    ]);
    todoList[editIndex.index - 1] = editIndex.editedTask;
    console.log(chalk.green(`\nTask ${editIndex.index - 1} has been Edited from your List`));
};
let viewTask = () => {
    console.log(chalk.green("\n Your To-Do List is\n"));
    todoList.forEach((newtask, index) => {
        console.log(chalk.blue(index + 1, newtask));
    });
};
main();
