import React from "react";
import Header from "../Header";
import AddNote from "./AddNote";
import "./HomePage.css";
import FloatingNote from "./FloatingNote";

const HomePage = () => {
	return (
		<div>
			<div id="home-background-image"></div>
			<Header />
			<div className="d-flex justify-content-between">
				<h3 className="fw-semibold mx-4 mt-4">Welcome @Name!</h3>
				<button className="btn btn-outline-light mx-4 mt-4">
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
