import IsLoggedReducer from "./isLogged";
import ShowLoctionMarkerDetailReducer from './showLocationMarkerDetail';
import LocationMarkerCoordsReducer from './locationMarkerCoords';
import MarkerClickedLockUnlock from './markerClickedLockUnlock';
import LatestAddedMarker from './latestAddedMarker';
import SetMap from "./setMap";
import {combineReducers} from 'redux';

const store = combineReducers({
    login: IsLoggedReducer,
    locationMarkerDetail: ShowLoctionMarkerDetailReducer,
    locationMarkerCoords: LocationMarkerCoordsReducer,
    markerClickedLockUnlock: MarkerClickedLockUnlock,
    latestAddedMarker: LatestAddedMarker,
    setMap: SetMap
})

export default store;