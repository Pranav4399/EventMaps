import {React, useEffect, useState} from 'react';  

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import {useSelector} from 'react-redux';

import iconMarker from '../../assets/marker-icon.png';
import iconRetina from '../../assets/marker-icon-2x.png';
import iconShadow from '../../assets/marker-shadow.png';

import '../../styles/components/modal.css';
import '../../styles/components/map.css';

import '../../utils/leaflet-marker/leaflet.awesome-markers.js';
import '../../utils/leaflet-marker/leaflet.awesome-markers.css';

import LocationModal from './modal';
import LocationMarker from './locationMarker';
import GetUserLocation from './getUserLocation';

import axios from 'axios';

import { useAuth0 } from '@auth0/auth0-react';

const WorldMap = () => {
  const [map, setMap] = useState(null)
  const [displayedMarkers, setDisplayedMarkers] = useState([])

  const { user , isAuthenticated } = useAuth0();
  // const dispatch = useDispatch();
  // dispatch(SetMap(map));
  const [center, setCenter] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('userPositionCoords'));
    return saved !== null
      ? [saved['lat'], saved['lng']]
      : [12.9716, 77.5946];
    });

    const MarkerClicked = useSelector(state => state.markerClickedLockUnlock);
    const [show, setShow] = useState(true);

    const [choice, setChoice] = useState(() => {
      return localStorage.getItem('userChoice') !== null
      ? true
      : false;
    });

    const icon = L.icon({ 
        iconRetinaUrl:iconRetina, 
        iconUrl: iconMarker, 
        shadowUrl: iconShadow ,
        iconSize: [24,24],
    });

    var userLocationMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'blue',
      iconColor: 'black'
    });

    var eventLocationMarker = L.AwesomeMarkers.icon({
      icon: 'star',
      markerColor: 'red',
      iconColor: 'black'
    });

    useEffect(()=> {
      axios.get(`http://localhost:3000/events`)
      .then((response) => {
        setDisplayedMarkers(response.data)
      })
      .catch((error) => {
          alert(error);
      });
    },[])
    
    return (
        <MapContainer center={center} zoom={5} scrollWheelZoom={true} ref={setMap}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayedMarkers.map((item, index) => (
        <Marker position={[item.eventLat, item.eventLng]} icon={eventLocationMarker} key={index}>
          <Popup>
            <table>
              <tbody>
                <tr>
                  <td>Event Name</td>
                  <td>{item.eventName}</td>
                </tr>
                <tr>
                  <td>Organizer</td>
                  <td>{item.eventAddedByName + " / " +item.eventAddedByEmail}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{item.eventCategory.split('-')[1]}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{item.eventDescription}</td>
                </tr>
                <tr>
                  <td>Date/Time</td>
                  <td>{item.eventDate} / {item.eventTime}</td>
                </tr>
              </tbody>
            </table>
            <button className='btn btn-light copy-details' onClick={() =>  
              navigator.clipboard.writeText("Event Name - " + item.eventName 
              + "\nOrganized by - " + item.eventAddedByName + " / " +item.eventAddedByEmail
              + "\nCategory - " + item.eventCategory + "\nDescription - " + item.eventDescription
              + "\nDate/Time - " + item.eventDate + " / " + item.eventTime)}>
              Copy Details
            </button>
          </Popup>
        </Marker>))}
        {choice ? null : <Marker position={center} icon={userLocationMarker}>
          <Popup>
            <h4>Welcome to EventMaps</h4>
          </Popup>
        </Marker>}
        {choice ? null : <LocationModal show={show} setShow={setShow} setChoice={setChoice}/>}
        {choice ? <GetUserLocation icon={userLocationMarker}/> : null}
        <LocationMarker />
      </MapContainer>
    );
}

export default WorldMap;