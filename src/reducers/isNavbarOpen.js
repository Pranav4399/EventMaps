const IsNavBarOpenClose = (state=true, action) => {
    switch(action.type) {
        case 'NAVBAR_EXPAND_COLLAPSE':
            return !state;
        default:
            return state;
    }
}

export default IsNavBarOpenClose;