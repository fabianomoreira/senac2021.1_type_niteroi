CREATE DATABASE db_filmes;

USE db_filmes;

CREATE TABLE categoria(
	id int PRIMARY KEY auto_increment,
    titulo VARCHAR(15) NOT NULL,
    imagePath VARCHAR(100) NOT NULL
);