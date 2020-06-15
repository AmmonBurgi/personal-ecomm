const bcrypt = require('bcryptjs')
module.exports = {
register: async(req, res) => {
const db = req.app.get('db')
const {email, username, password} = req.body
},
login: async(req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
}
}