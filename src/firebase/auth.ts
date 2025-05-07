import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';

export const registerUser = async (email: string, password: string, role: 'teacher' | 'student') => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Guardar rol del usuario en Firestore
  await setDoc(doc(db, 'users', user.uid), {
    email,
    role,
    createdAt: new Date(),
  });

  return user;
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export const getUserRole = async (uid: string): Promise<'teacher' | 'student' | null> => {
  try {
    const docRef = doc(db, "users", uid);
    const snapshot = await getDoc(docRef);

    if (snapshot.exists()) {
      const data = snapshot.data();
      return data.role as 'teacher' | 'student';
    } else {
      console.log("No user document found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user role:", error);
    return null;
  }
};
