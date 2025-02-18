import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBujAMAGRMGnoCDPUsbUJuW7PvRk3QabKQ",
  authDomain: "portfolioo-b1dbb.firebaseapp.com",
  projectId: "portfolioo-b1dbb",
  storageBucket: "portfolioo-b1dbb.firebasestorage.app",
  messagingSenderId: "320053371523",
  appId: "1:320053371523:web:aefb3305522f4d8a00b1b6",
  measurementId: "G-1DNWFDWZZK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);