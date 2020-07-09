update ecom_product
set pro_img = $1, pro_title = $2, price = $3, description = $4, brand_id = $6, sport_id = $7
where product_id = $5;