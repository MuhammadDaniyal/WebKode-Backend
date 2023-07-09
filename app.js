const express = require('express');
const cors = require('cors');
const connect = require('./db/connect')
const routerTeam = require('./router/teamRoute')
const routerRegistration = require('./router/registrationRoute')
const app = express();
const port = process.env.PORT || 8080;

/** middleware */
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.disable('x-powered-by')

/** API Routes */
app.use('/api', routerRegistration, routerTeam)

/** http get request */
app.get('/', (req, res) => {
    res.status(201).send('Hello World!')
})

/** start server */

connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        })
    } catch (error) {
        console.log("Cannot connect with server");
    }
}).catch((error) => {
    console.log("Database not connected");
})
