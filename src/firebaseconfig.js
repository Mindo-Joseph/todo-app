// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCYYonSsh4-nlmluw-_XQXYSDffSX2T4jU',
  authDomain: 'to-do-db3f8.firebaseapp.com',
  databaseURL: 'https://to-do-db3f8.firebaseio.com',
  projectId: 'to-do-db3f8',
  storageBucket: 'to-do-db3f8.appspot.com',
  messagingSenderId: '585444997331',
  appId: '1:585444997331:web:6fffa9fa29ed947f8b7c26',
  measurementId: 'G-3V63EM5MVV',
};
firebase.initializeApp(firebaseConfig);
