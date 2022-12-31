import React from "react";
import "./ReleaseNotes.css";
import Header from "../Header";

const ReleaseNotes = () => {
	return (
		<div>
			<div id="release-background-image"></div>
			<Header />
			<h3 className="px-4 pt-4 fw-semibold">
				Releases <i className="bi bi-bar-chart-steps" style={{ color: "yellow" }}></i>
			</h3>
			<hr />
			<ul className="list-group list-group-flush">
				<li className="list-group-item list-release lead">
					<h5>Release 1.13</h5>
					<div className="fs-6 text-light">- Release Notes Page Added</div>
				</li>
				<li className="list-group-item list-release lead">
					<h5>Release 1.12</h5>
					<div className="fs-6 text-light">- Suggestion and Feedback Page Added</div>
				</li>
				<li className="list-group-item list-release lead">
					<h5>Release 1.11</h5>
					<div className="fs-6 text-light">- Landing Page Added</div>
				</li>
				<li className="list-group-item list-release lead">
					<h5>Release 1.10</h5>
					<div className="fs-6 text-light">
						- Project added to github with Login and Sign Up pages.
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ReleaseNotes;
