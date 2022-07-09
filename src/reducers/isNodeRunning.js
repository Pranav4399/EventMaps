const IsNodeRunning = (state=false, action) => {
    switch(action.type) {
        case 'NODE_RUNNING':
            return !state;
        default:
            return state;
    }
}

export default IsNodeRunning;