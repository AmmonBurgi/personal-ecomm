create table ecom_user (
user_id serial primary key,
email varchar(300),
username varchar(200),
password varchar(1000)
);
create table ecom_brand(
brand_id serial primary key,
brand_title varchar(200)
);
create table ecom_sport(
sport_id serial primary key,
sport_title varchar(300)
);
create table ecom_product(
product_id serial primary key,
pro_title varchar(300),
description text,
price integer,
pro_img text,
brand_id integer references ecom_brand(brand_id),
sport_id integer REFERENCES ecom_sport(sport_id)
);
create table ecom_cart(
product_id INTEGER,
user_id INTEGER REFERENCES ecom_user(user_id)
);