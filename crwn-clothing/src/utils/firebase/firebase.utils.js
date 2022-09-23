import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyDh4CxtLDEppujV7vzkPwNbmp0HMIhsOc4",
	authDomain: "crwn-clothing-db-82861.firebaseapp.com",
	projectId: "crwn-clothing-db-82861",
	storageBucket: "crwn-clothing-db-82861.appspot.com",
	messagingSenderId: "863696430064",
	appId: "1:863696430064:web:5ad1c0d3fcf07fc8713335",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRdirect = () =>
	signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = doc(db, "users", userAuth.uid);

	console.log(userDocRef);

	const userSnapshot = await getDoc(userDocRef);
	console.log(userSnapshot.exists());
	//not exist
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("there is an error", error.message);
		}
	}

	//exist
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	
	
	
	createAuthUserWithEmailAndPassword(auth, email, password)
};