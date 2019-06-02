const initState = {
    channels:[
    ],

}

const channelReducer = (state = initState, action) => {
    switch(action.type){
        case 'CHANNEL_CREATED':
            console.log('channel created', action.message);
            return state;
        case 'CHANNEL_CREATED_ERROR':
            console.log('channel created error', action.err);
            return state;
        default:
            return state
    }
}

export default channelReducer