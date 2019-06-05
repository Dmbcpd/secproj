const initState = {
    current_channel:''
}

const filterMessageReducer = (state = initState, action) => {

    console.log(action)
    switch(action.type){
        case 'CHANNELS_FILTERED':
            let chan = action.channel;
            console.log('channels filtered', chan);
            return {...chan}
                    
        case 'CHANNEL_FILTER_ERROR':
            console.log('channel filter error', action.err);
            return state;
        default:
            return state
    }
}

export default filterMessageReducer