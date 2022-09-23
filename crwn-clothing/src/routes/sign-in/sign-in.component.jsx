import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx"

import { React, userEffect } from "react";
import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopup();
		const userDocRef = await createUserDocumentFromAuth(user);
	};

	return (
		<div>
			<h1> Sign In Page</h1>
			<button onClick={logGoogleUser}> Sign in with google </button>
			<SignUpForm/>
		</div>
	);
};

export default SignIn;
