import { addDoc, collection } from 'firebase/firestore';
import { db } from './firebaseConfig.js'; // 



export default async function addTestData() {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: "Frank",
      createdAt: new Date()
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}