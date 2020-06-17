const { decodeBase64 } = require("bcryptjs")

module.exports = {
    sports: (req, res) => {
        const db = req.app.get('db')
        db.pro.get_sports()
        .then(sports => res.status(200).send(sports))
        .catch(err => console.log(err))
    }
}