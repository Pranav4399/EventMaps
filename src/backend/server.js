//import {isNodeRunning} from "../actions/index.js";
import {useDispatch, useSelector} from 'react-redux';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import {listAllEvents, createNewEvent, readEvent, deleteEvent} from './controllers/eventController.js';

//db connection
import "./dbconnect.js";

//const dispatch = useDispatch();

const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/// REST-API CONFIG
app.enable('trust proxy');
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5000/");
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,Authorization,content-type,application/json');
    next();
});

app.use(
  cors(
    // {
    //   origin: config.prodAdminURL,
    //   process.env.NODE_ENV === "development"
    //       ? config.devAdminURL
    //       : config.prodAdminURL,
    //   credentials: true,
    // }
  )
);

app.route("/events").get(listAllEvents).post(createNewEvent);
app.route("/events/:email").get(readEvent);
app.route("/events/:id").delete(deleteEvent);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  //dispatch(ShowLoctionMarkerDetail());
})