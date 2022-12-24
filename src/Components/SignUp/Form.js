import React from "react";
import "../Form.css";
import { Link } from "react-router-dom";

const Form = () => {
	return (
		<div className="mx-4 my-2">
			<form method="post">
				<div className="input-group col-lg mt-3 my-md-none">
					<label htmlFor="username" className="input-group-text">
						<i className="bi bi-person"></i>
					</label>
					<input
						id="username"
						type="text"
						className="form-control input-box"
						maxLength="30"
						placeholder="Username (Eg. cooldude_007)"
						autoComplete="off"
						required
					/>
				</div>
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
				<div className="input-group col-lg mt-3 my-md-none">
					<label htmlFor="userbirth" className="input-group-text">
						<i className="bi bi-balloon-heart"></i>
					</label>
					<input
						id="userbirth"
						type="date"
						className="form-control input-box"
						placeholder="Birth Date (yyyy-mm-dd)"
						autoComplete="off"
						required
					/>
				</div>
				<div className="fw-light mt-3">
					Already have an account?&nbsp;
					<Link to="/login" className="link">
						Login Here <i className="bi bi-arrow-bar-right"></i>
					</Link>
				</div>
				<div className="my-4 text-center">
					<button type="submit" className="btn btn-lg btn-outline-dark" id="usersubmit" rows="3">
						Sign Up!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
