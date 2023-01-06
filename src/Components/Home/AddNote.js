import React from "react";
import Note from "./Note";

const AddNote = ({ addNoteHandler, newNote, setnewNote }) => {
	return (
		<div>
			<Note addNoteHandler={addNoteHandler} newNote={newNote} setnewNote={setnewNote} />
		</div>
	);
};

export default AddNote;
