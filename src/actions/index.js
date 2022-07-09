export const IsLogged = () => {
    return {
        type: 'SIGN_IN'
    }
}

export const IsNodeRunning = () => {
    return {
        type: 'NODE_RUNNING'
    }
}

export const ShowLoctionMarkerDetail = () => {
    return {
        type: 'SHOW_LOCATION_DETAIL'
    }
}

export const LocationMarkerCoords = (coords) => {
    return {
        type: 'GET_LOCATION_MARKER_COORDS',
        latlng: coords || null
    }
}

export const MarkerClickedLock = () => {
    return {
        type: 'MARKER_CLICKED_LOCK',
    }
}

export const MarkerClickedUnlock = () => {
    return {
        type: 'MARKER_CLICKED_UNLOCK',
    }
}

export const LatestAddedMarker = (marker) => {
    return {
        type: 'LATEST_ADDED_MARKER',
        marker: marker || null
    }
}

export const SetMap = (map) => {
    return {
        type: 'SET_MAP',
        map: map || null
    }
}

export const IsNavBarOpenClose = () => {
    return {
        type: 'NAVBAR_EXPAND_COLLAPSE'
    }
}

export const IsRightNavbarOpenClose = () => {
    return {
        type: 'RIGHT_NAVBAR_EXPAND_COLLAPSE'
    }
}