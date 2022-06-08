import Event from '../models/eventModel.js';
import asyncHandler from 'express-async-handler';

export const getEvents = asyncHandler(async(req, res) => {
    const events = await Event.find({})
    res.json(events);
})