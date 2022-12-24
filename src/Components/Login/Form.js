import React from "react";
import "../Form.css";
import { Link } from "react-router-dom";

const Form = () => {
	return (
		<div className="mx-4 my-2">
			<form method="post">
				<div className="input-group col-lg mt-3 my-md-none">
					<label htmlFor="useremail" className="input-group-text">
						<i className="bi bi-envelope"></i>
					</label>
					<input
						id="useremail"
						type="email"
						className="form-control input-box"
						maxLength="40"
						placeholder="Email Address"
						autoComplete="off"
						required
					/>
				</div>
				<div className="input-group col-lg mt-3 my-md-none">
					<label htmlFor="userpass" className="input-group-text">
						<i className="bi bi-key"></i>
					</label>
					<input
						id="userpass"
						type="password"
						className="form-control input-box"
						maxLength="16"
						minLength="8"
						placeholder="••••••••"
						autoComplete="off"
						required
					/>
				</div>
				<div className="fw-light mt-3">
					Don't have an account?&nbsp;
					<Link to="/signup" className="link">
						Sign Up! <i className="bi bi-arrow-bar-right"></i>
					</Link>
				</div>
				<div className="my-4 text-center">
					<button type="submit" className="btn btn-lg btn-outline-dark" id="usersubmit" rows="3">
						Login!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
