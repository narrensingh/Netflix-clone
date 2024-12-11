import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAOKt8Xxr2ug9TyYO_30JvGR8_CMITQy3w',
  authDomain: 'netflix-fc79d.firebaseapp.com',
  projectId: 'netflix-fc79d',
  storageBucket: 'netflix-fc79d.firebasestorage.app',
  messagingSenderId: '641975347841',
  appId: '1:641975347841:web:0905e9b271e13ef336bb80',
  measurementId: 'G-Z7FN8XKL87',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth };
export default db;
