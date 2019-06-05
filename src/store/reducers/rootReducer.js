import authReducer from './authReducer'
import messageReducer from './messageReducer'
import channelReducer from './channelReducer'
import { combineReducers } from 'redux'
import { firestoreReducer} from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import { reducer as formReducer } from 'redux-form'
import filterMessageReducer from './filterMessageReducer';
import keyReducer from './keyReducer'

const rootReducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    message: messageReducer,
    channel: channelReducer,
    msgfilter:filterMessageReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer,
    vault:keyReducer
});

export default rootReducer