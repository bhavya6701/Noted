import React from "react";
import "react-quill/dist/quill.bubble.css";
import DOMPurify from "dompurify";

const FloatingNote = ({ notes, editNoteHandler, deleteNoteHandler }) => {
	return (
		<div>
			{Object.keys(notes).map((key, i) => {
				return (
					<div className="card text-area-background text-area-view mb-1" key={key}>
						<div className="card-body">
							<h4 className="card-title ">Note {i + 1}</h4>
							<h6 className="card-subtitle mb-2 lead d-flex justify-content-between">
								Last Updated: {notes[key].date}
								<div>
									<a href="#" className="link" onClick={() => editNoteHandler(notes[key])}>
										<i className="bi bi-pencil-square text-warning"></i>
									</a>
									{" | "}
									<a href="#" className="link" onClick={() => deleteNoteHandler(notes[key].id)}>
										<i className="bi bi-trash3 text-danger"></i>
									</a>
								</div>
							</h6>
							<p
								className="card-text"
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(notes[key].note),
								}}
							></p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default FloatingNote;
