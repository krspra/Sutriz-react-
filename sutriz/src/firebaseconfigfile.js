// Import the functions you need from the SDKs you need.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

// Web app's Firebase configuration.
const firebaseConfig = {
  apiKey: "AIzaSyDUwscV_gRtt73QRqktjMR1musem07n0pY",
  authDomain: "mysutriz.firebaseapp.com",
  projectId: "mysutriz",
  storageBucket: "mysutriz.appspot.com",
  messagingSenderId: "493147767852",
  appId: "1:493147767852:web:c0985ddba12593f927bd89",
  measurementId: "G-1WYRM40TM4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);