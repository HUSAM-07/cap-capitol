import { db } from '../firebase/config';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

export const addFinancialData = async (userId, data) => {
  try {
    const docRef = await addDoc(collection(db, 'financialData'), {
      ...data,
      userId,
      createdAt: new Date(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding document: ', error);
    throw error;
  }
};

export const getFinancialData = async (userId) => {
  try {
    const q = query(collection(db, 'financialData'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error getting documents: ', error);
    throw error;
  }
};