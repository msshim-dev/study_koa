create database IF NOT EXISTS study;
use study;
create table user_info
(
  idx int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  user_name varchar(20)  NOT NULL,
  age int NOT NULL,
  regdate datetime NOT NULL
);