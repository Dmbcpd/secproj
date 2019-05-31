export const sendMessage = (message) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message 
            
        }).then(() =>{
            dispatch({ type:'REQUEST_CHANNEL_SUCCESS', message});
        }).catch((err) =>{
            dispatch({ type:'REQUEST_CHANNEL_ERROR', err});
        })
    }
};