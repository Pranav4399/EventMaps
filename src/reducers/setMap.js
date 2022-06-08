const SetMap = (state=null, action) => {
    switch(action.type) {
        case 'SET_MAP':{
            return {
                ...state,
                map: action.map
            }
        }       
        default: // need this for default case
            return state ;
    }
}

export default SetMap;