import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCNAUL56Dudug1AHzLw59YirWafoEhceUU',
  authDomain: 'starbucks-ccf7b.firebaseapp.com',
  databaseURL: 'https://starbucks-ccf7b-default-rtdb.firebaseio.com',
  projectId: 'starbucks-ccf7b',
  storageBucket: 'starbucks-ccf7b.appspot.com',
  messagingSenderId: '897680487237',
  appId: '1:897680487237:web:e36f9acea94eaac865c42c',
  measurementId: 'G-JLGWDHHW56'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
