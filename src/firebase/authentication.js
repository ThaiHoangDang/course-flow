import { auth } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

// Sign-up Function
export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Sign-in Function
export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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