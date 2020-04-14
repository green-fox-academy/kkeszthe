SHOW DATABASES;
CREATE DATABASE movies;
USE movies;
CREATE TABLE Users
(
    id INTEGER PRIMARY KEY,
    firstname VARCHAR(255),
    lastname VARCHAR(255)
);

CREATE TABLE movies
(
    id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    director VARCHAR(255),
    year INTEGER(4),
    length_minutes INTEGER
);

CREATE TABLE towatch
(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id INTEGER,
    movie_id INTEGER,
    FOREIGN KEY
(user_id) REFERENCES Users
(id),
    FOREIGN KEY
(movie_id) REFERENCES movies
(id),
    has_watched BOOLEAN
);

SHOW TABLES;
DESCRIBE movies;

ALTER TABLE Users MODIFY COLUMN id INTEGER AUTO_INCREMENT;
INSERT INTO Users
VALUES
    (null, "Aluar", "Velsyr");

INSERT INTO movies
VALUES
    (null, "A remény rabjai", "Frank Darabont", 1994, 142),
    (null, "A keresztapa", "Francis Ford Coppola", 1972, 175),
    (null, "A keresztapa II", "Francis Ford Coppola", 1974, 202),
    (null, "A sötétlovag", "Christopher Nolan", 2008, 152),
    (null, "Tizenkét dühös ember", "Sidney Lumet", 1957, 96),
    (null, "Schindler listája", "Steven Spielberg", 1993, 195),
    (null, "A Gyűrűk Ura: A király visszatér", "Peter Jackson", 2003, 201),
    (null, "Ponyvaregény", "Quentin Tarantino", 1994, 154),
    (null, "A Jó, a Rossz és a Csúf", "Sergio Leone", 1966, 161),
    (null, "A Gyűrűk Ura: A gyűrű szövetsége ", "Peter Jackson", 2001, 178);

DELETE FROM Users WHERE id = 2;

INSERT INTO towatch
    (user_id,movie_id,has_watched)
VALUES
    (2, 2, FALSE),
    (2, 3, FALSE),
    (2, 4, FALSE),
    (2, 5, TRUE),
    (2, 6, FALSE),
    (2, 7, FALSE),
    (2, 8, TRUE),
    (2, 9, FALSE),
    (2, 10, FALSE),
    (2, 11, TRUE);

SELECT *
FROM towatch;
UPDATE towatch SET has_watched = 1 WHERE id = 2;