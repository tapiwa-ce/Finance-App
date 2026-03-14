import { initializeApp } from "firebase/app";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "YOUR_FIREBASE_API_KEY",
  // authDomain: "YOUR_FIREBASE_AUTH_DOMAIN",
  // projectId: "YOUR_FIREBASE_PROJECT_ID",
  // storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",
  // messagingSenderId: "YOUR_FIREBASE_MESSAGING_SENDER_ID",
  // appId: "YOUR_FIREBASE_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
// export const auth = initializeAuth(app);

export const firestore = getFirestore(app);
