SELECT employees.id,
  employees.first_name AS "first name",
  employees.last_name AS "last name",
  roles.title,
  departments.department_name AS "department",
  roles.salary
FROM employees
  JOIN roles on employees.role_id = roles.department_id
  JOIN departments on roles.department_id = departments.id;