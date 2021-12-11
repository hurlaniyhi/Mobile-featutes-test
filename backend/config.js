const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    user: process.env.USERNAME,
    password: process.env.PASSWORD
}