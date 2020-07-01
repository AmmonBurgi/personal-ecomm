insert into ecom_user (
    email,
    username,
    password,
    admin
) values (
    $1,
    $2,
    $3,
    $4
)RETURNING user_id, email, username 