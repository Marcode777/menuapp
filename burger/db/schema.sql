
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
  id INT AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY (id)
);

-- this schema.sql file, when prompted in mysql with the file path, e.g. mysql source /Users/username/Desktop/RCB/eatdaburger/burger/db/schema.sql, will automatically create the database and table in mqsl
