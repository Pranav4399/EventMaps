const MarkerClickedLockUnlock = (state=false, action) => {
    switch(action.type) {
        case 'MARKER_CLICKED_LOCK':
            return true;
        case 'MARKER_CLICKED_UNLOCK':
            return false;
        default:
            return state;
    }
}

export default MarkerClickedLockUnlock;