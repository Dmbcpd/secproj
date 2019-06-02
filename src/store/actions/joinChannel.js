export const joinChannel = (channel) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;
      firestore.collection('messages').add({
        message: "I would like to join your channel. Please accept",
        sender: profile.nickName,
        sender_id: authorId,
        channel_id:channel.channel,
        timestamp: Date.now()

      }).then(() =>{
          dispatch({ type:'CHANNEL_REQUEST_CREATED', channel});
      }).catch((err) =>{
          dispatch({ type:'CHANNEL_REQUEST_ERROR', err});
      })

    }
  }