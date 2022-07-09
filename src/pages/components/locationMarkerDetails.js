import {useSelector} from 'react-redux';
//import { useMapEvents } from 'react-leaflet/hooks';
import { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import eventCategories from "../../utils/event-category.json"

import "../../styles/components/custom.css";

const LocationMarkerDetails = () => {
    const LocationMarkerCoords = useSelector(state => state.locationMarkerCoords);
    //const markers = useSelector(state => state.latestAddedMarker);
    //const map = useSelector(state => state.setMap);

    const { user , isAuthenticated } = useAuth0();

    const [eventName, setEventName] = useState("")
    const [eventCategory, setEventCategory] = useState("🎵-Music")
    const [eventDescription, setEventDescription] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [eventNameRequiredError, setEventNameRequiredError] = useState(false)
    const [eventDescRequiredError, setEventDescRequiredError] = useState(false)
    const [eventDateRequiredError, setEventDateRequiredError] = useState(false)
    const [eventTimeRequiredError, setEventTimeRequiredError] = useState(false)
    const [loading, setLoading] = useState(false)
    // const deleteMarker = useMapEvents({
    //     click(e) {
    //         map.removeLayer(markers.marker);
    //     },
    // });

    function getCurrentDate(separator='-'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    const handleEventName = (e) => {
        setEventName(e.target.value.trim());
        setEventNameRequiredError(false);
    }

    const handleEventCategory = (e) => {
        setEventCategory(e.target.value);
    }

    const handleEventDescription = (e) => {
        setEventDescription(e.target.value.trim());
        setEventDescRequiredError(false);
    }

    const handleEventDate = (e) => {
        setEventDate(e.target.value);
    }

    const handleEventTime = (e) => {
        setEventTime(e.target.value);
    }

    const submitEventDetails = () => {
        if (!eventName || !eventDescription || !eventDate || !eventTime) {
            if(eventName === "") {
                setEventNameRequiredError(true)
            }

            if(eventDescription === ""){
                setEventDescRequiredError(true)
            }

            if(eventDate === ""){
                setEventDateRequiredError(true)
            }

            if(eventTime === ""){
                setEventTimeRequiredError(true)
            }
        }
        else{
            if(isAuthenticated){
                setLoading(true)
                const eventLat = LocationMarkerCoords.coords.lat;
                const eventLng = LocationMarkerCoords.coords.lng;
                const eventAddedByEmail = user.email;
                const eventAddedByName = user.name

                const payload = {
                    eventName,
                    eventCategory,
                    eventDescription,
                    eventDate,
                    eventTime,
                    eventLat,
                    eventLng,
                    eventAddedByEmail,
                    eventAddedByName
                }
                //Send event Data to database from here

                axios
                .post(`http://localhost:3000/events`, payload)
                .then((response) => {
                    alert("Event Created");
                    setLoading(false);
                })
                .catch((error) => {
                    alert(error);
                });
            }
            else{
                alert("User is not authenticated");
                return;
            }
        }
    }

    return <div className="locationMarkerDetails-container">
        <div>
            <div>
                <input type="text" className="event--name" placeholder="Enter event name" id="eventName" onChange={handleEventName} />
                {eventNameRequiredError ? (
                    <div className="login-form-msg" style={{"color" : "red"}}>
                        <span>Event Name is required.</span>
                    </div>
                ) : null}
            </div>
            <div>
                <select className="event--category" onChange={handleEventCategory}>
                    {eventCategories.map((category, index) => {
                        return (
                            <option key={index} value={category.emoji + "-" + category.name}>{category.emoji + " " + category.name}</option>
                        )
                    })} 
                </select>
            </div>
            <div>
                <textarea placeholder="Enter short description about the event" className="event--description" onChange={handleEventDescription}/>
                {eventDescRequiredError ? (
                    <div className="login-form-msg" style={{"color" : "red"}}>
                        <span>Event Description is required.</span>
                    </div>
                ) : null}
            </div>
            <div>
                <input type="date" className='event--date' onChange={handleEventDate} min={getCurrentDate()}/>
                {eventDateRequiredError ? (
                    <div className="login-form-msg" style={{"color" : "red"}}>
                        <span>Event Date is required.</span>
                    </div>
                ) : null}
            </div>
            <div>
                <input type="time" id="appt" className='event--time' name="appt" onChange={handleEventTime} />
                {eventTimeRequiredError ? (
                    <div className="login-form-msg">
                        <span>Event Time is required.</span>
                    </div>
                ) : null}
            </div>
            <div>
                <input disabled type="text" value={"Latitude : " + LocationMarkerCoords.coords.lat} className="event--lat" />
                <input disabled type="text" value={"Longitude : " + LocationMarkerCoords.coords.lng} className="event--lng" />
            </div>
            <div>
                {!loading ? (
                    <button type="button" className="m-2 btn btn-primary" onClick={()=>submitEventDetails()}>Add</button>
                ) : (
                    <button type="button" className="m-2 btn btn-primary" disabled>Loading</button>
                )}
                <button type="button" className="m-2 btn btn-danger">Remove</button>
            </div>
        </div>
    </div>
}

export default LocationMarkerDetails;