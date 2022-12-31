import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const FloatingNote = () => {
	const [value, setValue] = useState("abc");
	return (
		<div>
			<ReactQuill
				readOnly={true}
				theme="bubble"
				value={value}
				onChange={setValue}
				className="text-area-background text-area-view"
			/>
		</div>
	);
};

export default FloatingNote;
