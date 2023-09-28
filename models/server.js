const express = require('express')
const cors = require('cors');
require('dotenv').config();

//const { dbConnection } = require('../db/config');

class Server {


    constructor() {

        this.app = express();
        this.PORT = process.env.PORT;
        this.homePath = '/';
        this.userPath = '/api/users';

        //middleware
        this.middleware();

        //Connect to dataBase
        // this.connectDb()

        //App Routes
        this.routes();
    }


    // async connectDb() {
    //     await dbConnection();
    // }

    //Middleware

    middleware() {

        //CORS Middleware
        this.app.use(cors())

        //Public Directory Middleware
        this.app.use(express.static('public'))

        //Json Middleware
        this.app.use(express.json())

    }


    routes() {
        //this.app.use(this.homePath, require('../routes/home.js'))
        this.app.use(this.userPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.PORT, () => console.log('App Running on Port', this.PORT))
    }
}

module.exports = Server;