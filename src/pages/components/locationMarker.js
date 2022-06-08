import { useMapEvents } from 'react-leaflet/hooks';
import L from 'leaflet';
import {useDispatch, useSelector} from 'react-redux';
import {IsLogged, ShowLoctionMarkerDetail, LocationMarkerCoords, MarkerClickedLock, LatestAddedMarker } from '../../actions';

const LocationMarker = () => {

    const dispatch = useDispatch();
    
    const markers = useSelector(state => state.latestAddedMarker);

    var LeafIcon = L.Icon.extend({
        options: {
           iconSize:     [38, 95],
           shadowSize:   [50, 64],
           iconAnchor:   [22, 94],
           shadowAnchor: [4, 62],
           popupAnchor:  [-3, -76]
        }
    });
    
    var greenIcon = new LeafIcon({
        iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
        shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png'
    })

    var popup = L.popup().setContent("You clicked here. Please fill in the details in the left pane to permanently add the event to the map. Also for security reasons, you can add only one marker to the map");
    const map = useMapEvents({
      click(e) {
        if(markers.length !== 0)
          map.removeLayer(markers.marker);
        
        var marker = L.marker(e.latlng, {icon: greenIcon}).bindPopup(popup);
        dispatch(ShowLoctionMarkerDetail());
        dispatch(MarkerClickedLock());
        dispatch(LocationMarkerCoords(e.latlng));
        marker.addTo(map).openPopup();
        dispatch(LatestAddedMarker(marker));
      },
    });

    // map.on('popupopen', function() {
    //   alert("testing");    
    // });
}

export default LocationMarker;