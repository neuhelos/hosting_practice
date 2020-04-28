const pgp = require("pg-promise")({});
const dotenv = require('dotenv')

dotenv.config() //when application runs locally, will be using local .env file config environmental variables
//when app is hosted, will use hosting service config environmental variables. Here would use the env variable of hosting service for database url

const db = pgp(process.env.DATABASE_URL);

module.exports = db; 

