import React from "react";
import { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};
const SignUpForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);

	const { displayName, email, password, confirmPassword } = formFields;

    const handleChange =(event)=>{
        const {name,value}=event.target;
        setFormFields({...formFields,[name]:value});
        console.log(formFields);
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        
    }

	return (
		<div>
			<form onSubmit={() => {}}>
				<label>Display name</label>
				<input required onChange={handleChange} name="displayName" value={displayName}/>

				<label>Email</label>
				<input type="email" required onChange={handleChange} name="email" value={email}/>

				<label>Password</label>
				<input type="password" required onChange={handleChange} name="password" value={password}/>

				<label>Confirm password</label>
				<input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

				<button type="submit">Sign up</button>
			</form>
		</div>
	);
};

export default SignUpForm;
