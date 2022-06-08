import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },
    eventDescription: {
        type: String,
        required: true
    },
    eventCategory: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    eventLat: {
        type: Number,
        required: true
    },
    eventLng: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Event = mongoose.model('Events', eventSchema)

export default Event