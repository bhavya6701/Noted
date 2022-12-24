import React from "react";
import Header from "./Header";
import Form from "./Form";
import "./LoginBox.css";

const LoginBox = () => {
	return (
		<div>
			<Header />
			<div className="login-box container text-bg-light rounded-5">
				<h3 className="text-center pt-2 mt-2 fw-semibold">Login</h3>
				<hr />
				<Form />
			</div>
		</div>
	);
};

export default LoginBox;
