const ShowLoctionMarkerDetail = (state=false, action) => {
    switch(action.type) {
        case 'SHOW_LOCATION_DETAIL':
            return true;
        default:
            return state;
    }
}

export default ShowLoctionMarkerDetail;