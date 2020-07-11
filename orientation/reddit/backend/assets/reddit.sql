CREATE DATABASE reddit;
USE reddit;
CREATE TABLE users
(
    user_name varchar
(12) PRIMARY KEY
);
CREATE TABLE posts
(
    id INTEGER PRIMARY KEY,
    title VARCHAR
(20),
    post_url TEXT,
    time_stamp TIMESTAMP,
    score INTEGER,
    user varchar
    (12),
 FOREIGN KEY
    (user) REFERENCES users
    (user_name),
    vote INTEGER
);

    SELECT *
    FROM posts;

    insert into posts
        (title, post_url, user, time_stamp)
    values
        ("Zűrök mindenütt", "9gag.com", "tekla", now());

    INSERT INTO users
        (user_name)
    VALUES
        ("tekla")