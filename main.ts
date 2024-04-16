#!/usr/env/node

import inquirer from "inquirer";

let todo = [];
let condition=true;
while(condition){
const answer = await inquirer.prompt([
  {
    message: "What whould you like add your todoes",
    name: "firstTodo",
    type: "input",
  },
  {
    message: "What whould you like add more in your todoes",
    name: "secondTodo",
    type: "confirm",
    // default: "true",
  },
  
]);

todo.push(answer.firstTodo);
console.log(todo);
 condition = answer.secondTodo
};