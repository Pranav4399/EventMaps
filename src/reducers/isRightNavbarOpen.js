const IsNavBarOpenClose = (state=false, action) => {
    switch(action.type) {
        case 'RIGHT_NAVBAR_EXPAND_COLLAPSE':
            return !state;
        default:
            return state;
    }
}

export default IsNavBarOpenClose;