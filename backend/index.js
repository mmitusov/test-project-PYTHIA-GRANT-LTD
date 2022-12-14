require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const routes = require('./routes/index')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes); 

const start = async() => {
    try {
        await sequelize.authenticate(); 
        await sequelize.sync();
    } catch (err) {
        console.log(err)
    }
}
start()

app.listen(process.env.PORT || 3005, () => console.log(`Server is running on the port ${process.env.PORT}`))

