import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5DsPrcl_FHdw3o_gspwTmTTgPHN5qYL0",
  authDomain: "semestralka-27045.firebaseapp.com",
  projectId: "semestralka-27045",
  storageBucket: "semestralka-27045.appspot.com",
  messagingSenderId: "933453031962",
  appId: "1:933453031962:web:1916ac21fd2ae5a360ffa3",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
