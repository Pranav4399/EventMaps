import Event from'../models/eventModel.js';

//List all available Event from database....
const listAllEvents = (req, res) => {
    Event.find({}, (err, event) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(event);
  });
};
// Creating a new event and save it to database....
const createNewEvent = (req, res) => {
  let newEvent = new Event(req.body);
  newEvent.save((err, event) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(event);
  });
};
// read a perticular Event by _id......
const readEvent = (req, res) => {
  Event.find({email : req.params.email}, (err, task) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(task);
  });
};

//Update a perticular task by _id ....
// const updateTask = (req, res) => {
//   Task.findOneAndUpdate(
//     { _id: req.params.taskid },
//     req.body,
//     { new: true },
//     (err, task) => {
//       if (err) {
//         res.status(500).send(err);
//       }
//       res.status(200).json(task);
//     }
//   );
// };
// Delete a perticular task by _id .....
const deleteEvent = (req, res) => {
  console.log("Delete");
  const { id } = req.query;
  Event.remove({ _id: id }, (err, task) => {
    if (err) {
      res.status(404).send(err);
    }
    res.status(200).json({ message: "Task successfully deleted" });
  });
};

export {listAllEvents, createNewEvent, readEvent, deleteEvent };