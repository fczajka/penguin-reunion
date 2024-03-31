// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  updateDoc,
} from "firebase/firestore";

const {
  VITE_APP_FIREBASE_API_KEY,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_DATABASE_URL,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_STORAGE_BUCKET,
  VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_APP_FIREBASE_APP_ID,
  VITE_APP_FIREBASE_MEASUREMENT_ID,
} = import.meta.env;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: VITE_APP_FIREBASE_DATABASE_URL,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_APP_FIREBASE_APP_ID,
  measurementId: VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDb = getFirestore(app);

export const getReunionDate = async () => {
  const dates = collection(firestoreDb, "penguins-reunion");
  const snapshot = (await getDocs(dates)).docs.map((doc) => doc.data());
  return snapshot;
};

export const updateDate = async (date: string) => {
  const dateRef = doc(firestoreDb, "penguins-reunion", "penguins");
  await updateDoc(dateRef, {
    date,
  });
};
