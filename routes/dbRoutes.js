const connection = require("../db/database.js");
const inquirer = require("inquirer");

const getAllDepartments = () => {
  const query = connection.query(
    "SELECT * FROM departments",
    function (err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
};

const getAllRoles = () => {
  const query = connection.query("SELECT * FROM roles", function (err, res) {
    if (err) throw err;
    console.log(res);
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
      const query = connection.query(
        "INSERT INTO departments SET ?",
        {
          department_name: departmentChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res);
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
      const query = connection.query(
        "INSERT INTO roles SET ?",
        {
          title: roleChoice,
          salary: salaryChoice,
          department_id: departmentChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res);
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
      const query = connection.query(
        "INSERT INTO employees SET ?",
        {
          first_name: firstName,
          last_name: lastName,
          role_id: roleIdChoice,
          manager_id: managerIdChoice,
        },
        function (err, res) {
          if (err) throw err;
          console.log(res);
        }
      );
    });
};

const updateEmployeeRole = () => {
  const firstNameArr = [];
  const lastNameArr = [];
  const fullNameArr = [];
  employees = connection
    .query("SELECT * FROM employees", function (err, res) {
      if (err) throw err;
      for (i = 0; i < res.length; i++) {
        firstNameArr.push(res[i].first_name);
      }
      for (i = 0; i < res.length; i++) {
        lastNameArr.push(res[i].last_name);
      }
      for (i = 0; i < res.length; i++) {
        let name = firstNameArr[i] + " " + lastNameArr[i];
        fullNameArr.push(name);
      }
    })
    .then(() => {
      inquirer.prompt([
        {
          type: "list",
          name: "employeeChoice",
          message: "Which employee's role would you like to update?",
          choices: fullNameArr,
        },
      ]);
    });
};

updateEmployeeRole();
