const connection = require("../db/database.js");

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

const addDepartment = () => {};

const addRole = () => {};

const addEmployee = () => {};

const updateEmployeeRole = () => {};
