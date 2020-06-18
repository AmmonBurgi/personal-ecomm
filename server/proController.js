
module.exports = {
    sports: (req, res) => {
        const db = req.app.get('db')
        db.pro.get_sports()
        .then(sports => res.status(200).send(sports))
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
        const {user_id} = req.session.user
        let proId = []
        db.pro.get_cart_id(user_id)
        .then(id => {
            id.map(element => {
                proId.push(element.product_id)
            })  
        }).catch(err => console.log(err))
        db.pro.get_products()
        .then(pro => {
            let result = []
            let products = pro
            products.map(element => {
                for(let i = 0; i < proId.length; i++){
                    if(element.product_id === proId[i]){
                        result.push(element)
                    }
                }
            }) 
            res.status(200).send(result)
        }).catch(err => console.log(err))
    },
    deleteCart: (req, res) => {
        const db = req.app.get('db')
        const {pro_id} = req.query
        db.pro.delete_cart(pro_id)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err))
    }
}