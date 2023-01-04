import React from "react";
import HomeHeader from "./HomeHeader";
import AddNote from "./AddNote";
import "./HomePage.css";
import FloatingNote from "./FloatingNote";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	var username = localStorage.getItem("username");
	const navigate = useNavigate();
	const logOutHandler = () => {
		localStorage.clear();
		navigate("/");
	};

	return (
		<div>
			<div id="home-background-image"></div>
			<HomeHeader />
			<div className="d-flex justify-content-between">
				<h3 className="fw-semibold mx-4 mt-4">Welcome {username}!</h3>
				<button className="btn btn-outline-light mx-4 mt-4" onClick={logOutHandler}>
					Logout <i className="bi bi-box-arrow-right"></i>
				</button>
			</div>
			<hr />
			<div className="row m-0 note-window">
				<div className="col-5 border-right">
					<AddNote />
				</div>
				<div className="col-7">
					<div className="row m-0">
						<FloatingNote />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
