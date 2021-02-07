const inquirer = require("inquirer");
//const cTable = require("console.table");
//const connection = require("db/database.js");
//const getAllDepartments = require("./routes/dbRoutes.js");

const selectTask = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
        ],
      },
    ])
    .then((answer) => {
      switch (answer.userChoice) {
        case "View all departments":
          console.log("this");
          getAllDepartments();
        case "View all roles":
          getAllRoles();
        case "Add a department":
          addDepartment();
        case "Add a role":
          addRole();
        case "Add an employee":
          addEmployee();
        case "Update an employee role":
          updateEmployeeRole();
      }
    });
};

selectTask();
