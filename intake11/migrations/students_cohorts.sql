
CREATE TABLE cohorts (
    id serial PRIMARY KEY,
    name varchar(15),
    start_date date,
    end_date date
);

CREATE TABLE students (
    id serial PRIMARY KEY,
    cohort_id int REFERENCES cohorts(id),
    name varchar(15),
    email varchar(30),
    phone varchar(9),
    github varchar(30),
    start_date date,
    end_date date
);
