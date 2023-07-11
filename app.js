const express = require('express');
const cors = require('cors');
const connect = require('./db/connect')
const routerTeam = require('./router/teamRoute')
const routerRegistration = require('./router/registrationRoute')
const app = express();
const port = process.env.PORT || 8080;

/** middleware */
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))






  app.use(express.json({ limit: '100mb' })); 


app.use(cors())
app.disable('x-powered-by')



app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

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
