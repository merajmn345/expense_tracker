require("dotenv").config();
const mongoose = require("mongoose");

const db = async () => {
    try {
        mongoose.set("strictQuery", false);
        console.log("Connecting to == ", process.env.MONGO_CON);
        await mongoose.connect("mongodb://localhost:27017/test", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("DB connection error:", error);
    }
};

module.exports = { db };

//
