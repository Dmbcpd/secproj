const initState = {
    subscribers:[
    ],

}

const addSubscriberReducer = (state = initState, action) => {
    switch(action.type){
        case 'SUSCRIBER_CREATED':
            console.log('suscriber created', action.message);
            return state;
        case 'SUSCRIBER_CREATED_ERROR':
            console.log('subscriber created error', action.err);
            return state;
        default:
            return state
    }
}

export default addSubscriberReducer