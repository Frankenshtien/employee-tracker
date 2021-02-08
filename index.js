const inquirer = require("inquirer");
const {
  getAllEmployees,
  getAllDepartments,
  getAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} = require("./routes/dbRoutes");

const selectTask = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "View all departments",
          "View all roles",
          "Add a department",
          "Add a role",
          "Add an employee",
          "Update an employee role",
          "CANCEL",
        ],
      },
    ])
    .then((answer) => {
      if (answer.userChoice === "View all employees") {
        getAllEmployees();
      }
      if (answer.userChoice === "View all departments") {
        getAllDepartments();
      }
      if (answer.userChoice === "View all roles") {
        getAllRoles();
      }
      if (answer.userChoice === "Add a department") {
        addDepartment();
      }
      if (answer.userChoice === "Add a role") {
        addRole();
      }
      if (answer.userChoice === "Add an employee") {
        addEmployee();
      }
      if (answer.userChoice === "Update an employee") {
        updateEmployeeRole();
      }
      if (answer.userChoice === "CANCEL") {
        console.log("Thank you for using Employee-Tracker!\n Goodbye.");
        process.exit(1);
      }
    });
};

selectTask();
