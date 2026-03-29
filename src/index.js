require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const { DB_NAME } = require("./constants");
const express = require("express");

const app = express();

async function connectDB() {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_NAME}`,
        );
        console.log(
            `\n MongoDb Connected !! DB_host: ${connectionInstance.connection.host}`,
        );
    } catch (error) {
        console.error(error);
    }
}

connectDB().then(() => {
    app.on("error", (error) => {
        console.log("ERROR", error);
    });
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server Running at port ${process.env.PORT}`);
    });
});
