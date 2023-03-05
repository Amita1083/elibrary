import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCpouM_qzceA67ilQyi4Fw6CJD4lLbugs4",
  authDomain: "e-library-new-1ef7a.firebaseapp.com",
  databaseURL: "https://e-library-new-1ef7a-default-rtdb.firebaseio.com",
  projectId: "e-library-new-1ef7a",
  storageBucket: "e-library-new-1ef7a.appspot.com",
  messagingSenderId: "359897577390",
  appId: "1:359897577390:web:03954854f7793fa54eba3f"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();