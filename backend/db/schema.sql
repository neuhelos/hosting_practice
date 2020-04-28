-- DROP DATABASE IF EXISTS broken_project; //Don't need with Heroku (Heroku is providing database - drop/create)
-- CREATE DATABASE broken_project; //Don't need with Heroku
-- \c broken_project; // Don't need with Heroku


DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY, 
    username TEXT NOT NULL UNIQUE
);

DROP TABLE IF EXISTS cars; 


CREATE TABLE cars (
    id SERIAL PRIMARY KEY, 
    brand TEXT, 
    model TEXT,
    year INTEGER,
    owner_id INT REFERENCES users(id) ON DELETE SET NULL
);

INSERT INTO users(username) 
VALUES 
('Corey'),
('Jon'), 
('Jhenya'),
('Celine');

INSERT INTO cars(brand, model, year, owner_id)
VALUES
('Toyota', 'Camery', 1995, 1), 
('Toyota', '4Runner', 1990, 1), 
('Ford', 'Mustang', 1964, 2),
('Ford', 'Explorer', 2005, 3),
('Ford', 'Bronco', 2019, 3);

-- If web app has live users do not want to drop/destroy database upon re-build
-- To update database - run Migration on database. In SQL use ALTER syntax

-- Seed data can be hosted locally for development. But once deployed and in production Heroku can host live database (diff. to locally hosted db) with user-generated data