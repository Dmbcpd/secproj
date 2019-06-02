const initState = {
    messages:[
    ]
}

const messageReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANNEL_REQUEST':
            console.log('message sent', action.message);
            return state;
        case 'CHANNEL_REQUEST_ERROR':
            console.log('message send error', action.err);
            return state;
        default:
            return state
    }
}

export default messageReducer