import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0Jur74G3CRXnlp8bv0lOz4bLYlPwJ3Bw",
  authDomain: "inlakech-e0727.firebaseapp.com",
  projectId: "inlakech-e0727",
  storageBucket: "inlakech-e0727.appspot.com",
  messagingSenderId: "532258477552",
  appId: "1:532258477552:web:fa55d91b9d2c512f8a7935",
  measurementId: "G-M1LWBDLVV0",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
