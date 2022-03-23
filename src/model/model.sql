CREATE TABLE cars(
    car_id SERIAL PRIMARY KEY NOT NULL,
    car_name VARCHAR(60) NOT NULL,
    car_price VARCHAR(60) NOT NULL,
    car_type VARCHAR(60) NOT NULL
);

INSERT INTO
    cars(car_name, car_price, car_type)
VALUES
('Captiva', '28 000', 'HugeBack');