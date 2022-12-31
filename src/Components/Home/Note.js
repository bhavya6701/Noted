import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Note = () => {
	const [value, setValue] = useState("abc");
	return (
		<div>
			<ReactQuill theme="snow" value={value} onChange={setValue} className="text-area-background" />
			<div className="row">
				<div className="col-2 offset-10 p-0">
					<button className="btn btn-outline-warning mt-3 me-3">Add A Note!</button>
				</div>
			</div>
		</div>
	);
};

export default Note;
