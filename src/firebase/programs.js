import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getProgram(id) {
  const docRef = doc(db, "Program", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function getAllPrograms() {
  const querySnapshot = await getDocs(collection(db, "Program"));
  const programs = [];

  querySnapshot.forEach((doc) => {
    const course = {
      id: doc.id,
      ...doc.data()
    };

    programs.push(course);
  });
  
  return programs;
}
