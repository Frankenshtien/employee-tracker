INSERT INTO departments (department_name)
VALUES ('Sales'),
  ('Engineering'),
  ('Legal'),
  ('Managing');
INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
  ('Head Engineer', 200000, 2),
  ('Top Lawyer', 110000, 3),
  ('Head Manager', 300000, 4);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('Bill', 'Farnsworth', 3, 4),
  ('Kyle', 'Condie', 2, 4),
  ('Sera', 'Condie', 4, 4),
  ('Loyd', 'Guy', 1, 4)