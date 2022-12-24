import React from "react";
import Header from "./Header";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
	const getLink = () => {
		const url = "http://localhost:3000/";
		navigator.clipboard.writeText(url);
		alert("Copied to Clipboard");
	};

	return (
		<div>
			<div className="row m-0">
				<Header />
			</div>
			<div id="landing-background-image"></div>
			<div className="row m-0 p-0">
				{/* left-body */}
				<div className="col">
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head">Create An Account Today!</h3>
							<h6 className="card-subtitle mb-2 text-muted">Start writing notes</h6>
							<p className="card-text fs-5">
								By creating an account, you will be able to write notes which will be shown
								anonymously to other people. While you will be able to see what others write.
								Already have an account? Login!
							</p>
							<Link to="/signup" className="link">
								Sign Up
							</Link>
							{" | "}
							<Link to="/login" className="link">
								Login
							</Link>
						</div>
					</div>
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head">Know The Creator!</h3>
							<h6 className="card-subtitle mb-2 text-muted">- Bhavya Ruparelia</h6>
							<p className="card-text fs-5">
								Hey! I am a 21-year-old Java developer and AI enthusiast. Want to work with me?
								Connect with me on LinkedIn&nbsp;
								<a href="https://bhavyaruparelia.me/" id="linked-in">
									<i className="bi bi-linkedin"></i>
								</a>
								. Know more about me by following the given link!
							</p>
							<a href="https://bhavyaruparelia.me/" className="link">
								Reach Out <i className="bi bi-person"></i>
							</a>
						</div>
					</div>
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head">Suggestion Box!</h3>
							<h6 className="card-subtitle mb-2 text-muted">
								Send your suggestions to make 'Noted' better
							</h6>
							<p className="card-text fs-5">
								Your feedback matters! Write few words about your experience. Add suggestions for
								the future updates.
							</p>
							<Link to="/suggestions" className="link">
								Suggestions & Feedback <i className="bi bi-pencil-square"></i>
							</Link>
						</div>
					</div>
				</div>

				{/* main-body */}
				<div className="col-6 m-0">
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title ">Main Content - Put images, examples!</h3>
							<h6 className="card-subtitle mb-2 text-muted">Start writing notes...</h6>
							<p className="card-text fs-5">Complete at end</p>
						</div>
					</div>
				</div>

				{/* right-body */}
				<div className="col m-0">
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head-2">Release Notes!</h3>
							<h6 className="card-subtitle mb-2 text-muted">Check the updates </h6>
							<p className="card-text fs-5">
								By creating an account, you will be able to write notes which will be shown
								anonymously to other people. While you will be able to see what others write.
							</p>
							<Link to="/release-notes" className="link">
								Release Notes <i className="bi bi-bar-chart-line"></i>
							</Link>
						</div>
					</div>
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head-2">Credits To The Helpers!</h3>
							<h6 className="card-subtitle mb-2 text-muted">
								A special thanks to people contributing to 'Noted'
							</h6>
							<p className="card-text fs-5">
								This web application may not be the same without the help of several individuals
								helping by providing free to use content for this web application.
							</p>
							<Link to="/credits" className="link">
								Rights & Credits <i className="bi bi-arrow-bar-right"></i>
							</Link>
						</div>
					</div>
					<div className="row card m-3">
						<div className="card-body text-dark">
							<h3 className="card-title head-2">Website Reach!</h3>
							<h6 className="card-subtitle mb-2 text-muted">Total number of account creations</h6>
							<p className="card-text fs-5">
								At present, there are {0} Noted accounts. They enjoy this space and so would you.
								Keep showing your love to this web application. Share it with others!
							</p>
							<button className="btn-link link" onClick={getLink}>
								Noted <i className="bi bi-link-45deg"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
