export const filterMessages = (channel) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
       
            dispatch({ type:'CHANNELS_FILTERED', channel});
        
    }
};