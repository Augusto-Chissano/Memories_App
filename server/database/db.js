import mongoose from "mongoose";

//Cloud
const CONNECTION_URL = "";

//Localhost
const DB_URL = "mongodb://127.0.0.1/memories"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const db = () => mongoose.connect(DB_URL, options)

export default db