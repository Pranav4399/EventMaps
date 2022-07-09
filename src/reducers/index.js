import IsLoggedReducer from "./isLogged";
import IsNodeRunning from "./isNodeRunning";
import ShowLoctionMarkerDetailReducer from './showLocationMarkerDetail';
import LocationMarkerCoordsReducer from './locationMarkerCoords';
import MarkerClickedLockUnlock from './markerClickedLockUnlock';
import LatestAddedMarker from './latestAddedMarker';
import IsNavBarOpenClose from "./isNavbarOpen";
import IsRightNavbarOpenClose from "./isRightNavbarOpen";
import SetMap from "./setMap";
import {combineReducers} from 'redux';

const store = combineReducers({
    login: IsLoggedReducer,
    locationMarkerDetail: ShowLoctionMarkerDetailReducer,
    locationMarkerCoords: LocationMarkerCoordsReducer,
    markerClickedLockUnlock: MarkerClickedLockUnlock,
    latestAddedMarker: LatestAddedMarker,
    nodeRunning: IsNodeRunning,
    navbarOpenClose: IsNavBarOpenClose,
    rightNavbarOpenClose: IsRightNavbarOpenClose,
    setMap: SetMap
})

export default store;