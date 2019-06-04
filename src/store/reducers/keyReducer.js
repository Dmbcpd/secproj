const initState = {
    privateKey:''
}

const keyReducer = (state = initState, action) => {
    switch(action.type){
        case 'VAULT_UNLOCKED':
            console.log('message sent', action.message);
            return state;
        case 'VAULT_UNLOCK_ERROR':
            console.log('message send error', action.err);
            return state;
        default:
            return state
    }
}

export default keyReducer