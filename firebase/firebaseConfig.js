import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Optionally import the services that you want to use
// import {...} from 'firebase/auth';

// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB-lM6N6krRAj0U58NBoom6dDkcjxK7xvE",
  authDomain: "skill-stack-fd941.firebaseapp.com",
  databaseURL: 'https://skill-stack-fd941.firebaseio.com',
  projectId: "skill-stack-fd941",
  storageBucket: "skill-stack-fd941.firebasestorage.app",
  messagingSenderId: "130755055322",
  appId: "1:130755055322:web:9e366bd74a46b13dda5fe3",
  measurementId: "G-MJ3DW95RWM"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const auth = getAuth(app);
export const db = getFirestore(app);
