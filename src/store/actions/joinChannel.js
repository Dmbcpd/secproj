export const joinChannel = (message) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    var channel_id=message
    firestore.collection('messages').add({
      message: 'Please let me join. Thanks',
      sender: profile.nickName,
      sender_id: authorId,
      channel_id: channel_id,
      timestamp: Date.now()

    }).then(() =>{
        dispatch({ type:'CHANNEL_REQUEST_CREATED', message});
    }).catch((err) =>{
        dispatch({ type:'CHANNEL_REQUEST_ERROR', err});
    })

  }
}