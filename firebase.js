import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMlLU362koeYLCUYvZZbQILz-KGb8xgIA",
    authDomain: "disneyplus-clone-98ae0.firebaseapp.com",
    projectId: "disneyplus-clone-98ae0",
    storageBucket: "disneyplus-clone-98ae0.appspot.com",
    messagingSenderId: "253109396951",
    appId: "1:253109396951:web:fc8035d96af0933338d792",
    measurementId: "G-470S5RQPBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;