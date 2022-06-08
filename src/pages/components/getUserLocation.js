import {React, useState, useEffect} from 'react';  

import { Marker, Popup } from 'react-leaflet';
import { useMap } from 'react-leaflet/hooks';

const GetUserLocation = (props) => {
    const [bbox, setBbox] = useState([]);
    const [position, setPosition] = useState(null);
  
    const map = useMap();
  
    useEffect(() => {
      map.locate().on("locationfound", function (e) {
        setPosition(e.latlng);
        if(localStorage.getItem('userPositionCoords') === null) {
          localStorage.setItem('userPositionCoords', JSON.stringify(e.latlng));
        }
        map.flyTo(e.latlng, map.getZoom());
        setBbox(e.bounds.toBBoxString().split(","));
      });
    }, [map]);
  
    return position === null ? null : (
      <Marker position={position} icon={props.icon}>
        <Popup>
          You are here. <br />
          Map bbox: <br />
          <b>Southwest lng</b>: {bbox[0]} <br />
          <b>Southwest lat</b>: {bbox[1]} <br />
          <b>Northeast lng</b>: {bbox[2]} <br />
          <b>Northeast lat</b>: {bbox[3]}
        </Popup>
      </Marker>
    );
}

export default GetUserLocation;