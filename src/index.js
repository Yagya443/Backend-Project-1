require('dotenv').config({ path: './.env' });
const mongoose = require("mongoose");
const {DB_NAME} = require("./constants");
const express=require('express')

const app=express()


async function connectDB() {
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDb Connected !! DB_host: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error(error);
    }
}

connectDB();

module.exports=app