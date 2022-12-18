import React from "react";
import "./Form.css";

const Form = () => {
	return (
		<div className="mx-4 my-2">
			<form method="post">
				<div className="mb-3">
					<label for="useremail" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control input-box"
						id="useremail"
						placeholder="name@example.com"
					/>
				</div>
				<div className="mb-3">
					<label for="userpass" className="form-label">
						Password
					</label>
					<input
						type="password"
						maxLength={15}
						minLength={8}
						className="form-control input-box"
						id="userpass"
						placeholder="••••••••"
					/>
				</div>
				<div className="fw-light">
					Don't have an account?&nbsp;
					<a href="" className="link">
						Sign Up! <i className="bi bi-arrow-bar-right"></i>
					</a>
				</div>
				<div className="my-4 text-center">
					<button type="submit" className="btn btn-outline-dark" id="usersubmit" rows="3">
						Login!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
