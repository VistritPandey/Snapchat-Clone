import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDedbCHz7NoV0zN74rL3GpFe2wFNc1guVU',
  authDomain: 'snapchat-clone-5edec.firebaseapp.com',
  projectId: 'snapchat-clone-5edec',
  storageBucket: 'snapchat-clone-5edec.appspot.com',
  messagingSenderId: '92395773561',
  appId: '1:92395773561:web:d7070e62459b7b3d5dfea8',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, storage, provider }
