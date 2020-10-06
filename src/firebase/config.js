import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

import firebaseConfig from "../config/firebase"

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };