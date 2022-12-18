import React from "react";
import Header from "./Header";
import Form from "./Form";
import "./SignupBox.css";

const SignupBox = () => {
	return (
		<div className="signup-box container text-bg-light rounded-5">
			<Header />
			<Form />
		</div>
	);
};

export default SignupBox;
