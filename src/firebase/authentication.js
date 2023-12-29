import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useLocation, Navigate, Outlet } from 'react-router-dom';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import Cookies from "js-cookie";

const SEVEN_DAYS_IN_SECONDS = 604800;
const db = getFirestore();

// Sign-up Function
export const signUp = async (email, password, role, name, program) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    const userRef = doc(db, "users", uid);
    await setDoc(userRef, {email: email, role: role, name: name, program_id: program, completed_courses: [], in_progress_courses: []});
    return userCredential;
};

// Sign-in Function
export const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    Cookies.set("userID", userCredential.user.uid, { expires: SEVEN_DAYS_IN_SECONDS });
    const userRef = doc(db, "users", userCredential.user.uid);
    const userSnapshot = await getDoc(userRef);
    const userRole = userSnapshot.data()?.role;
    Cookies.set("userRole", userRole, { expires: SEVEN_DAYS_IN_SECONDS });
    return userCredential;
};



// Sign-out Function
export const signOut = () => {
    Cookies.remove("userID");
    Cookies.remove("userRole");
    return auth.signOut();
};

// Auth State Change Listener
export const onAuthStateChange = (callback) => {
    return onAuthStateChanged(auth, user => {
        if (user) {
            callback({ loggedIn: true, user });
        } else {
            callback({ loggedIn: false });
        }
    });
};

// Protected Route function  for students
export const ProtectedStudentRoute = () => {
    const location = useLocation();
    const userRole = Cookies.get("userRole");

    if (userRole === "Student") {
        return <Outlet />; // Implement logic for student role
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};


// Protected Route function for admins
export const ProtectedAdminRoute = () => {
    const location = useLocation();
    const userRole = Cookies.get("userRole");

    if (userRole === "Admin") {
        return <Outlet />; // Implement logic for admin role
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

// Function to get the current user's role from the cookie
export const getCurrentUserRole = () => {
    return Cookies.get("userRole");
};

// Function to get the current user's role from the cookie
export const getCurrentUserId = () => {
    return Cookies.get("userID");
};
