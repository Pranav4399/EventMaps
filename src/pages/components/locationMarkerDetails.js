import {useSelector} from 'react-redux';
import { useMapEvents } from 'react-leaflet/hooks';

const LocationMarkerDetails = () => {

    const LocationMarkerCoords = useSelector(state => state.locationMarkerCoords);
    const markers = useSelector(state => state.latestAddedMarker);
    const map = useSelector(state => state.setMap);

    console.log(map);

    // const deleteMarker = useMapEvents({
    //     click(e) {
    //         map.removeLayer(markers.marker);
    //     },
    // });

    return <div className="locationMarkerDetails-container">
        <div className="border-solid border-2 border-black">
            <div>
                <input type="text" className="border-solid border-2 border-indigo-600" placeholder="Enter event name" id="eventName" />
            </div>
            <div>
                <select className="m-2">
                    <option value="entertainment">Entertainment</option>
                    <option value="sport">Sport</option>
                    <option value="food">Food</option>
                </select>
            </div>
            <div>
                <textarea placeholder="Enter short description about the event" className="border-solid border-2" />
            </div>
            <div>
                <input disabled type="text" value={LocationMarkerCoords.coords.lat} className="border-solid border-2 text-gray-400" />
                <input disabled type="text" value={LocationMarkerCoords.coords.lng} className="border-solid border-2 text-gray-400"/>
            </div>
            <div>
                <button type="button" className="m-2 btn btn-primary">Add</button>
                <button type="button" className="m-2 btn btn-danger">Remove</button>
            </div>
        </div>
    </div>
}

export default LocationMarkerDetails;