import mongoose from 'mongoose';

const EventSchema = mongoose.Schema({
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
    eventDate:{
        type: String,
        required: true
    },
    eventTime:{
        type: String,
        required: true
    },
    eventLat: {
        type: Number,
        required: true
    },
    eventLng: {
        type: Number,
        required: true
    },
    eventAddedByEmail:{
        type: String,
        required: true
    },
    eventAddedByName:{
        type: String,
        required: true
    }
}, {
    timestamps: true
});

export default mongoose.model('Events', EventSchema);