const connection = require("../db/database.js");
const inquirer = require("inquirer");

const getAllDepartments = () => {
  query = connection.query(
    "SELECT * FROM ?",
    ["departments"],
    function (err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
  console.log(query);
};

const getAllRoles = () => {
  query = connection.query("SELECT * FROM ?", ["roles"], function (err, res) {
    if (err) throw err;
    console.log(res);
  });
  console.log(query);
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
      const departmentChoice = data.departmentChoice;
      console.log(departmentChoice);
      query = connection.query(
        "INSERT INTO departments VALUES ?",
        ["(" + departmentChoice + ")"],
        function (err, res) {
          if (err) throw err;
          console.log(query);
        }
      );
    });
};

const addRole = () => {};

const addEmployee = () => {};

const updateEmployeeRole = () => {};
getAllDepartments();
