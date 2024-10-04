import { auth } from './config';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut,
  sendPasswordResetEmail as firebaseSendPasswordResetEmail
} from 'firebase/auth';

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const signupUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};

export const sendPasswordResetEmail = (email) => {
  return firebaseSendPasswordResetEmail(auth, email);
};