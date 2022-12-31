import React from "react";
import "../Form.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Form = () => {
	const [rangeValue, setRangeValue] = useState(0);
	const rangeChangeListener = (event) => {
		setRangeValue(event.target.value);
	};
	return (
		<div className="mx-4 my-2">
			<form method="post">
				<div className="input-group col-lg mt-3 my-md-none">
					<label htmlFor="review-range" className="form-label lead">
						Overall Imperssion: {rangeValue}/100
					</label>
					<input
						type="range"
						className="form-range"
						id="review-range"
						onChange={rangeChangeListener}
					/>
				</div>
				<div className="input-group col-lg mt-3 my-md-none">
					<div className="form-floating">
						<textarea
							className="form-control"
							placeholder="Leave a comment here"
							id="comments"
						></textarea>
						<label htmlFor="floatingTextarea2" className="comment-label lead fs-6">
							Comments:
						</label>
					</div>
				</div>

				<div className="my-4 text-center">
					<button type="submit" className="btn btn-lg btn-outline-dark" id="usersubmit" rows="3">
						Submit!
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
