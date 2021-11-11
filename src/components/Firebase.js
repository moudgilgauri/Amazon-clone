import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD5zwkVLVtxtPw7ZYqZ5IeRZduAD-eAaG0",
  authDomain: "clone-3d155.firebaseapp.com",
  projectId: "clone-3d155",
  storageBucket: "clone-3d155.appspot.com",
  messagingSenderId: "315799069284",
  appId: "1:315799069284:web:b4748177e545b17239f571",
  measurementId: "G-DXHNM4CMFG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db,auth};
