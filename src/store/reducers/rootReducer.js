import authReducer from './authReducer'
import messageReducer from './messageReducer'
import channelReducer from './channelReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    channel: channelReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer