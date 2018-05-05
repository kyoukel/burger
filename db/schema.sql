DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
    id INT not null AUTO_INCREMENT,
    burger_name VARCHAR(100) not null,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

