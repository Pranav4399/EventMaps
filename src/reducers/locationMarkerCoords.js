const LocationMarkerCoords = (state={}, action) => {
    switch(action.type) {
        case 'GET_LOCATION_MARKER_COORDS':{
            return {
                ...state,
                coords: action.latlng
            }
        }       
        default: // need this for default case
            return state ;
    }
}

export default LocationMarkerCoords;