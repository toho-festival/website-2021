import firebaseClient from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import fb from "firebase/app";

const credentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// if(!firebaseClient.app.length) {
//   firebaseClient.initializeApp(credentials)
//   firebaseClient.analytics();
// }

// export default firebaseClient;
export const firebase = !fb.apps.length ? fb.initializeApp(credentials) : fb.app()
export const firestore = firebase.firestore()
