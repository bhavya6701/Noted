import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Note = ({ addNoteHandler, newNote, setnewNote }) => {
	return (
		<div>
			<form id="noteForm" method="post" onSubmit={addNoteHandler}>
				<ReactQuill
					theme="snow"
					value={newNote}
					onChange={setnewNote}
					className="text-area-background"
				/>
				<div className="row mt-3">
					<div className="col-2 offset-10 p-0">
						<input className="btn btn-outline-warning" type="submit" value={"Add Note!"} />
					</div>
				</div>
			</form>
		</div>
	);
};

export default Note;
