import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getCourse(id) {
  const docRef = doc(db, "course", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function getAllCourses() {
  const querySnapshot = await getDocs(collection(db, "course"));
  const courses = [];

  querySnapshot.forEach((doc) => {
    const course = {
      id: doc.id,
      ...doc.data()
    };

    courses.push(course);
  });
  
  return courses;
}