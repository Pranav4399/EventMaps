const mongoose = require("mongoose");
import {Event} from './models/eventModel'

const connectDB = async() => {
    try{
        const databaseName = 'EventMaps';
        const con = await mongoose.connect(`mongodb://localhost:127.0.0.1:27017/${databaseName}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });
        console.log(`Database connected : ${con.connection.host}`)
        Event();
    }
    catch(e) {
        console.error(`${e.message}`)
        process.exit(1)
    }
}

export default connectDB;