const express = require('express')
const app = express()
const cors = require('cors')

const {sequelize} = require('./config/database')
const routes = require('./api/routes')

app.use(cors())
app.use(express.json())
app.use('/api', routes)

sequelize.sync({force:true}).then(() => {
    console.log('Connection has been established successfuly');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
})


module.exports = app;