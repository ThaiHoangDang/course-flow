import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Cookies from "js-cookie";

const SEVEN_DAYS_IN_SECONDS = 604800;

// Sign-up Function
export const signUp = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Sign-in Function
export const signIn = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    Cookies.set("userID", userCredential.user.uid, { expires: SEVEN_DAYS_IN_SECONDS });
    return userCredential;
};


// Sign-out Function
export const signOut = () => {
    Cookies.remove("userID");
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
export const ProtectedRoute = () => {
    const userID = Cookies.get("userID");
    if (!userID) {
        // ... redirect to login page
        return false;
    }
    return true
};

// Protected Route function for admins