select * from ecom_product
where (pro_title ilike '%' || $1 || '%')