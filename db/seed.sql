create table ecom_user (
user_id serial primary key,
email varchar(300),
username varchar(200),
password varchar(1000)
)
create table ecom_brand(
brand_id serial primary key,
brand_title varchar(300),
product_type varchar(400)
);
create table ecom_product(
product_id serial primary key,
pro_title varchar(300),
description text,
price integer,
pro_img text,
brand_id integer REFERENCES ecom_brand(brand_id)
);