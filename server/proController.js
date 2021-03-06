
module.exports = {
    sports: (req, res) => {
        const db = req.app.get('db')
        db.pro.get_sports()
        .then(sports => {
            res.status(200).send(sports)})
        .catch(err => console.log(err))
    },
    getProducts: (req, res) => {
        const db = req.app.get('db')
        const {id, brand} = req.query
        if(brand === 'adidas'){
            db.pro.get_adidas(id)
            .then(pro => res.status(200).send(pro))
            .catch(err => console.log(err))
        } else if(brand === 'UA'){
            db.pro.get_ua(id)
            .then(pro => res.status(200).send(pro))
            .catch(err => console.log(err))
        } else if(brand === 'nike'){
            db.pro.get_nike(id)
            .then(pro => res.status(200).send(pro))
            .catch(err => console.log(err))
        }
    },
    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.pro.get_product(id)
        .then(product => {
            res.status(200).send(product)
        }).catch(err => console.log(err))
    },
    addToCart: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.body
        const {user_id} = req.session.user
        db.pro.add_cart(id, user_id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    getCartProduct: (req, res) => {
        const db = req.app.get('db')
        const user_id = req.session && req.session.user && req.session.user.user_id;

        db.pro.get_cart_id(user_id)
        .then(result => {
            const proId = result.map(product => product.product_id);
            db.pro.get_products_in_cart(`{${proId.join(",")}}`)
            .then(result => {
                res.status(200).send(result)
            })
            .catch(err => console.log(err))

        }).catch(err => console.log(err))
    },
    deleteCart: (req, res) => {
        const db = req.app.get('db')
        const {pro_id} = req.query
        db.pro.delete_cart(pro_id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    addProduct: (req, res) => {
        const db = req.app.get('db')
        const {proTitle, description, price, proImg, brand, sport} = req.body
        db.pro.add_new_product(proTitle, description, price, proImg, parseInt(brand), parseInt(sport))
        .then(() => res.sendStatus(201))
        .catch(err => console.log(err))
    },
    getSearched: (req, res) => {
        const db = req.app.get('db')
        const {searchVal} = req.query

        db.pro.get_search_pro(searchVal)
        .then(products => {
            res.status(200).send(products)
        }).catch(err => console.log(err))
    },
    editPro: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {img, title, proPrice, proDesc, brandId, sportId} = req.body
        db.pro.edit_pro(img, title, proPrice, proDesc, id, brandId, sportId)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.pro.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    },
    deleteAllCart: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.query
        db.pro.delete_all_cart(id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}