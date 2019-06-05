const initState = {
    privateKey:''
}

const keyReducer = (state = initState, action) => {
    switch(action.type){
        case 'VAULT_UNLOCKED':
            let pk = action.pk
            console.log('message sent', action.pk);
            return pk;
        case 'VAULT_UNLOCK_ERROR':
            console.log('message send error', action.err);
            return state;
        default:
            return state
    }
}

export default keyReducer