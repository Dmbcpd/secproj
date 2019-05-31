export const sendMessage = (message) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        const firestore = getFirestore();
        firestore.collection('messages').add({
            ...message, 
            sender:'Blanka',
            sender_id:'1245',
            'channel_id':'Atlanta',
            timestamp: Date.now()
        }).then(() =>{
            dispatch({ type:'SEND_MESSAGE', message});
        }).catch((err) =>{
            dispatch({ type:'SEND_MESSAGE_ERROR', err});
        })
    }
};