const { decodeBase64 } = require("bcryptjs")

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
    }
}