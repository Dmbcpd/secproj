const initState = {
    messages:[
    ]
}

const messageReducer = (state = initState, action) => {
    switch(action.type){
        case 'SEND_MESSAGE':
            console.log('message sent', action.message);
            return state;
        case 'SEND_MESSAGE_ERROR':
            console.log('message send error', action.err);
            return state;
        default:
            return state
    }
}

export default messageReducer