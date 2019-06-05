export const sendMessage = (message) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const currentChannel = String(getState().msgfilter.current_channel);
        firestore.collection('messages').add({
            ...message, 
            sender: profile.nickName,
            sender_id: authorId,
            channel_id:currentChannel,
            timestamp: Date.now()
        }).then(() =>{
            dispatch({ type:'SEND_MESSAGE', message});
        }).catch((err) =>{
            dispatch({ type:'SEND_MESSAGE_ERROR', err});
        })
    }
};