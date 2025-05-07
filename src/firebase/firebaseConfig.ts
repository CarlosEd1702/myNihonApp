// firebaseConfig.ts
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Configuración de Firebase (válida para web y móvil)
const firebaseConfig = {
  apiKey: "AIzaSyDw1DW7fgOnF77F9la27pBliePrCIEMlc8",
  authDomain: "mynihonapp.firebaseapp.com",
  projectId: "mynihonapp",
  storageBucket: "mynihonapp.appspot.com", // <- corregido (antes: firebaseStorage.app)
  messagingSenderId: "1034552585860",
  appId: "1:1034552585860:web:7a88a8dc1fef1365aedcd1",
  measurementId: "G-PNN926QHQH" // <- ignorado automáticamente en Expo Go
};

// Evita múltiples inicializaciones en modo desarrollo
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Exporta sólo lo necesario para tu app
export const auth = getAuth(app);
export const db = getFirestore(app);
