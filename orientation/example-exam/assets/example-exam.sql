CREATE DATABASE exampleexam;
USE exampleexam;

CREATE TABLE list
(
    id INTEGER NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    list_url TEXT,
    alias VARCHAR
    (255) UNIQUE,
    hit_count INTEGER,
    secret_code INTEGER
    (4) UNIQUE
);

    CREATE TABLE orderlist
    (
        id INTEGER NOT NULL
        AUTO_INCREMENT,
        name varchar
        (255) NOT NULL,
        address varchar
        (255) NOT NULL,
        base varchar
        (255) NOT NULL,
        topping varchar
        (255) NOT NULL,
        status varchar
        (255) NOT NULL,
        PRIMARY KEY
        (id)
    );
