import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

export async function getCourse(id) {
  const docRef = doc(db, "course", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
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