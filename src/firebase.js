import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtZH5V8E40pcJ8T_WjSxt7kcz5GAt_cn4",
  authDomain: "vistrit-snapchat.firebaseapp.com",
  projectId: "vistrit-snapchat",
  storageBucket: "vistrit-snapchat.appspot.com",
  messagingSenderId: "49962651762",
  appId: "1:49962651762:web:898becf9eb050561fff2eb",
  measurementId: "G-NZ64F6NXH0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
