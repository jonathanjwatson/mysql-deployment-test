### Schema

CREATE DATABASE test_db;
USE test_db;

CREATE TABLE tests
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
