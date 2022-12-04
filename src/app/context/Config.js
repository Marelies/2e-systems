
import firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyD6Cis4S3GPgGbiKKvdqiEoEle0mqlx-VM",
    authDomain: "e-systems-d583c.firebaseapp.com",
    projectId: "e-systems-d583c",
    storageBucket: "e-systems-d583c.appspot.com",
    messagingSenderId: "263890151007",
    appId: "1:263890151007:web:3f01a0a947b3ed1def5dea",
    measurementId: "G-LE02DE55YB"
};



firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }