import {React, useState} from 'react';  

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import {useSelector, useDispatch} from 'react-redux';

import iconMarker from '../../assets/marker-icon.png';
import iconRetina from '../../assets/marker-icon-2x.png';
import iconShadow from '../../assets/marker-shadow.png';

import '../../styles/components/modal.css';
import '../../styles/components/map.css';

import LocationModal from './modal';
import LocationMarker from './locationMarker';
import GetUserLocation from './getUserLocation';

import { SetMap} from '../../actions';

const WorldMap = () => {
  const [map, setMap] = useState(null)
  // const dispatch = useDispatch();
  // dispatch(SetMap(map));
  const [center, setCenter] = useState(() => {
    const saved = JSON.parse(localStorage.getItem('userPositionCoords'));
    return saved !== null
      ? [saved['lat'], saved['lng']]
      : [51.505, -0.09];
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

    return (
        <MapContainer center={center} zoom={13} scrollWheelZoom={true} ref={setMap}
        // whenReady={() => {
        //   console.log("This function will fire once the map is created");
        // }}
        >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {choice ? null : <Marker position={center} icon={icon}>
          <Popup>
            A yolo CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>}
        {choice ? null : <LocationModal show={show} setShow={setShow} setChoice={setChoice}/>}
        {choice ? <GetUserLocation icon={icon}/> : null}
        <LocationMarker />
      </MapContainer>
    );
}

export default WorldMap;