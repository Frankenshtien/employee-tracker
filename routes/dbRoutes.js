const connection = require("../db/database.js");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const selectTask = require("../index");

const getAllEmployees = () => {
  connection.query("SELECT * FROM employees", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

const getAllDepartments = () => {
  connection.query("SELECT * FROM departments", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

const getAllRoles = () => {
  connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.table(res);
  });
};

const addDepartment = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "departmentChoice",
        message: "What department would you like to add?",
      },
    ])
    .then((data) => {
      let departmentChoice = data.departmentChoice;
      connection.query(
        "INSERT INTO departments SET ?",
        {
          department_name: departmentChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(departmentChoice + " added to Departments database!");
        }
      );
    });
};

const addRole = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "roleChoice",
        message: "What role would you like to add?",
      },
      {
        type: "input",
        name: "salaryChoice",
        message: "What is this roles salary?",
      },
      {
        type: "input",
        name: "departmentChoice",
        message: "What is its department id?",
      },
    ])
    .then((data) => {
      let roleChoice = data.roleChoice;
      let salaryChoice = data.salaryChoice;
      let departmentChoice = data.departmentChoice;
      connection.query(
        "INSERT INTO roles SET ?",
        {
          title: roleChoice,
          salary: salaryChoice,
          department_id: departmentChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(roleChoice + "added to Roles database!");
        }
      );
    });
};

const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is this employees first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What their last name?",
      },
      {
        type: "input",
        name: "roleIdChoice",
        message: "What is is their role id?",
      },
      {
        type: "input",
        name: "managerIdChoice",
        message: "What is their manager's id?",
      },
    ])
    .then((data) => {
      let firstName = data.firstName;
      let lastName = data.lastName;
      let roleIdChoice = data.roleIdChoice;
      let managerIdChoice = data.managerIdChoice;
      connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: firstName,
          last_name: lastName,
          role_id: roleIdChoice,
          manager_id: managerIdChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(
            firstName + lastName + " was added to the Employee database!"
          );
        }
      );
    });
};

const updateEmployeeRole = () => {
  const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employees_db",
    password: "Ch1ck3nB0n3@SQL",
  });
  const firstNameArr = [];
  const lastNameArr = [];
  const fullNameArr = [];
  employees = con
    .promise()
    .query("SELECT * FROM employees")
    .then((data) => {
      const dataArr = data[0];
      console.log(dataArr[0]);
      for (i = 0; i < dataArr.length; i++) {
        firstNameArr.push(dataArr[i].first_name);
      }
      for (i = 0; i < dataArr.length; i++) {
        lastNameArr.push(dataArr[i].last_name);
      }
      for (i = 0; i < dataArr.length; i++) {
        let name = firstNameArr[i] + " " + lastNameArr[i];
        fullNameArr.push(name);
      }
      console.log(fullNameArr);
    })
    .then(() => {
      return inquirer.prompt([
        {
          type: "list",
          name: "employeeChoice",
          message: "Which employee's role would you like to update?",
          choices: fullNameArr,
        },
        {
          type: "input",
          name: "roleChoice",
          message: "What is their new role ID?",
        },
      ]);
    })
    .then((choice) => {
      const chosenEmployeeArr = choice.employeeChoice.split(" ");
      const chosenRole = choice.roleChoice;
      connection.query(
        "UPDATE employees SET role_id = ? WHERE first_name = ? AND last_name = ?",
        [chosenRole, chosenEmployeeArr[0], chosenEmployeeArr[1]]
      );
      console.log(
        choice.employeeChoice + " role updated to " + chosenRole + "!"
      );
    })
    .then(() => con.end());
};

module.exports = {
  getAllEmployees,
  getAllDepartments,
  getAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};
