import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage"

export function signInWithGoogle(): void {
    signInWithPopup(auth, authProvider);
}

export function signOut(): void {
    auth.signOut();
}

const firebaseConfig = {
    apiKey: "AIzaSyAF9LdWa5i5YJskiQh6cYg_MBN4auveCMI",
    authDomain: "musico-80127.firebaseapp.com",
    projectId: "musico-80127",
    storageBucket: "musico-80127.appspot.com",
    messagingSenderId: "958687933218",
    appId: "1:958687933218:web:297dbbc32ab0aa49502b7b",
    measurementId: "G-XYTHRV3SY7"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
  export const storage = getStorage(app);

  const authProvider = new GoogleAuthProvider();