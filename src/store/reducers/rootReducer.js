import authReducer from './authReducer'
import messageReducer from './messageReducer'
import channelReducer from './channelReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import filterMessageReducer from './filterMessageReducer'
import keyReducer from './keyReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    channel: channelReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer,
    msgfilter:filterMessageReducer,
    vault:keyReducer
});

export default rootReducer