// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAYaJjuFpqnrmHdK5GlN9rq_1_x3_lKHZg',
  authDomain: 'van-life-4cff1.firebaseapp.com',
  projectId: 'van-life-4cff1',
  storageBucket: 'van-life-4cff1.appspot.com',
  messagingSenderId: '764208756387',
  appId: '1:764208756387:web:512b8d821d08d3c06d7116',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const vansCollectionRef = collection(db, 'vans');
const usersCollectionRef = collection(db, 'users');

export async function getVans() {
  const vansSnapshot = await getDocs(vansCollectionRef);
  return vansSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function getVan(id) {
  const docRef = doc(db, 'vans', id);
  const vanSnapshot = await getDoc(docRef);
  return {
    ...vanSnapshot.data(),
    id: vanSnapshot.id,
  };
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where('hostId', '==', '123'));
  const hostVansSnapshot = await getDocs(q);

  return hostVansSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

export async function loginUser(creds) {
  const q = query(
      usersCollectionRef,
      where('email', '==', creds.email),
      where('password', '==', creds.password),
  );
  const userDataSnapshot = await getDocs(q);

  return userDataSnapshot.docs.map(doc => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}
