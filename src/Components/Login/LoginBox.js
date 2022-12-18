import React from "react";
import Header from "./Header";
import Form from "./Form";
import "./LoginBox.css";

const LoginBox = () => {
	return (
		<div className="login-box container text-bg-light rounded-5">
			<Header />
			<Form />
		</div>
	);
};

export default LoginBox;
