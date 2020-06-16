require('dotenv').config()
const express = require('express'),
    session = require('express-session'),
    massive = require('massive'),
    {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env,
    authCtrl = require('./authController'),
    port = SERVER_PORT,
    app = express()
    
    app.use(express.json())

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

    massive({
        connectionString: CONNECTION_STRING,
        ssl: {rejectUnauthorized: false}
    }).then(db => {
        app.set('db', db)
        console.log('db connected')
        app.listen(port, () => console.log(`server listening on port ${port}`))
    })