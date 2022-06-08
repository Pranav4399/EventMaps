const LatestAddedMarker = (state=[], action) => {
    switch(action.type) {
        case 'LATEST_ADDED_MARKER':{
            return {
                ...state,
                marker: action.marker
            }
        }       
        default: // need this for default case
            return state ;
    }
}

export default LatestAddedMarker;