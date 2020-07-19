require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    authCtrl = require('./authController'),
    proCtrl = require('./proController'),
    strCtrl = require('./stripeController'),
    port = SERVER_PORT,
    app = express()

    const path = require('path');

    app.use(express.json())
    app.use(express.static(__dirname + '/../build'))

    app.use(session({
        resave: false,
        saveUninitialized: true,
        secret: SESSION_SECRET,
        cookie: {maxAge: 1000 * 60 * 60 * 24 * 7}
    }))

    //Auth endpoints
    app.post('/api/login', authCtrl.login)
    app.post('/api/register', authCtrl.register)
    app.get('/api/logout', authCtrl.logout)
    app.get('/session', authCtrl.session)

    //Product endpoints
    app.get('/api/sports', proCtrl.sports)
    app.get('/api/products', proCtrl.getProducts)
    app.get('/api/product/:id', proCtrl.getProduct)
    app.post('/api/cart', proCtrl.addToCart)
    app.get('/api/cart', proCtrl.getCartProduct)
    app.delete('/api/cart', proCtrl.deleteCart)
    app.post('/api/add-product', proCtrl.addProduct)
    app.get('/api/pro-search', proCtrl.getSearched)
    app.put('/api/edit/:id', proCtrl.editPro)
    app.delete('/api/product/:id', proCtrl.deleteProduct)
    app.delete('/api/empty-cart/', proCtrl.deleteAllCart)

    //stripe endpoints
    app.get('/api/intent/', strCtrl.payIntent)

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db)
        console.log('db connected')
        app.listen(port, () => console.log(`server listening on port ${port}`))
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '../build/index.html'))
      });