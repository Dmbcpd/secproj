import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAw9Ip-0QH7X_0hmVnNGN9Mb0RrAbxU3Wc",
    authDomain: "security-project-d998f.firebaseapp.com",
    databaseURL: "https://security-project-d998f.firebaseio.com",
    projectId: "security-project-d998f",
    storageBucket: "security-project-d998f.appspot.com",
    messagingSenderId: "406877774720",
    appId: "1:406877774720:web:872977a2c98daa1b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase;