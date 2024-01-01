import { db } from "../config/firebase";
import { doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";

export async function getUser(id) {
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        console.log("No such document!");
        return null;
    }
}

export async function getAllUsersFromAProgram(id) {

    const q = query(collection(db, "users"), where("program_id", "==", id));

    const querySnapshot = await getDocs(q);
    const users = [];

    querySnapshot.forEach((doc) => {
        const user = {
            id: doc.id,
            ...doc.data()
        };

        users.push(user);
    });

    return users;
}

export async function getAllUsers() {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = [];

    querySnapshot.forEach((doc) => {
        const user = {
            id: doc.id,
            ...doc.data()
        };

        users.push(user);
    });

    return users;
}