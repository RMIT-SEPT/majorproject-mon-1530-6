The Spring boot application runs on local host 8080 (default) which takes input only from host 'localhost:3001' (crossorigins are set to 3001)

To start with booking/log in/sign in the folloeing has to be added into roles table: 
INSERT INTO roles(name) VALUES('ROLE_USER');
INSERT INTO roles(name) VALUES('ROLE_EMPLOYEE');
INSERT INTO roles(name) VALUES('ROLE_ADMIN');

To set the admin user the following has to be done: 
UPDATE sept.user_roles
SET role_id = 3
WHERE user_id=1;

Here, user_id is the id from USER table and role_id from ROLE table. 
This helps the application identify the type of user and provide navigation access.

These has to be/will be taken care soon to make it automatic. Will be done by the next sprint.