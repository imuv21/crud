import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC14Bp-i0eWqDTmUcO1XBx9xUMZ_wm_cIg",
  authDomain: "react-crud-7a3eb.firebaseapp.com",
  projectId: "react-crud-7a3eb",
  storageBucket: "react-crud-7a3eb.appspot.com",
  messagingSenderId: "218493919905",
  appId: "1:218493919905:web:44a6de09c233fcbf6786e0",
  measurementId: "G-J12B75NEE3"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);