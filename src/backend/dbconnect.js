import mongoose from 'mongoose';

const dbURI = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASS}@cluster0.39c69.mongodb.net/EventMaps?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(dbURI, options).then(
  () => {
    console.log("Database connection established!");
  },
  err => {
    console.log("Error connecting Database instance due to: ", err);
  }
);

// require any models
import './models/eventModel.js';