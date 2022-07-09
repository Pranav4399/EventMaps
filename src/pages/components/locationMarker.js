import { useMapEvents } from 'react-leaflet/hooks';
import L from 'leaflet';
import {useDispatch, useSelector} from 'react-redux';
import {IsNavBarOpenClose, IsRightNavbarOpenClose, ShowLoctionMarkerDetail, LocationMarkerCoords, MarkerClickedLock, LatestAddedMarker } from '../../actions';

const LocationMarker = () => {

    const dispatch = useDispatch();
    
    const markers = useSelector(state => state.latestAddedMarker);
    const isCollapsed = useSelector(state => state.navbarOpenClose);
    const isLogged = useSelector(state => state.login)
    const IsRightNavbarOpen = useSelector(state => state.rightNavbarOpenClose);

    var locationMarkerIcon = L.AwesomeMarkers.icon({
      markerColor: 'red',
      iconColor: 'black'
    });

    var popup = L.popup();
    isLogged ?
      popup.setContent("Please fill in the details in the left pane to permanently add the event to the map. Also for security reasons, you can add only one marker to the map at a time")
    :
      popup.setContent("Please login to add event");
    
    const map = useMapEvents({
      click(e) {
        if(markers.length !== 0)
          map.removeLayer(markers.marker);
        
        var marker = L.marker(e.latlng, {icon: locationMarkerIcon}).bindPopup(popup);
  
        if(isCollapsed === true){
          dispatch(IsNavBarOpenClose(true));
          if(IsRightNavbarOpen)
            dispatch(IsRightNavbarOpenClose());
        }
        if(isLogged) dispatch(ShowLoctionMarkerDetail());
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