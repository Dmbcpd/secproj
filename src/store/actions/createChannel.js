import { auth } from "firebase";

export const createChannel = (channel) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {
        //make async call to db
        //Here we will have our Symmetric encrypytion
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const admin = getState().firebase.auth.uid;
        firestore.collection('channels').add({
            ...channel,
            publicKey: profile.publicKey,
            admin: admin

        }).then(() =>{
            dispatch({ type:'CHANNEL_CREATED', channel});
        }).catch((err) =>{
            dispatch({ type:'CHANNEL_CREATED_ERROR', err});
        })


        firestore.collection('users').doc(admin).update({
        
            
            "nameOfChannels":  firestore.FieldValue.arrayUnion(channel.channel),
            "keyOfChannels": firestore.FieldValue.arrayUnion(profile.publicKey)
        })
    }
};