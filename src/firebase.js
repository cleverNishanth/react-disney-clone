import firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDCloI6-HhEY6hKpmO3MnfGW-_SBuYm01Q',
  authDomain: 'disneyplus-clone-5a059.firebaseapp.com',
  projectId: 'disneyplus-clone-5a059',
  storageBucket: 'disneyplus-clone-5a059.appspot.com',
  messagingSenderId: '503735978467',
  appId: '1:503735978467:web:6250d32ee531131cc678d6',
  measurementId: 'G-3NRBMDRPGL',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage }
export default db;