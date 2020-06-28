import React, { useState } from "react";

const InputForm = ({ sendMessage }) => {
	const [comm, setComm] = useState("");

	const onSubmit = (e) => {
		e.preventDefault();

		sendMessage(comm);

		setComm("");
	};

	const onEnterPress = (e) => {
		if (e.keyCode === 13 && !e.shiftKey) {
			onSubmit(e);
		}
	};

	return (
		<form
			style={{
				display: "flex",
				width: "100%",
				bottom: 0,
				left: 0,
				position: "absolute",
			}}
			onSubmit={onSubmit}
		>
			<textarea
				style={{
					display: "inline-block",
					width: "85%",
					resize: "none",
					fontSize: 16,
				}}
				value={comm}
				onChange={(e) => setComm(e.target.value)}
				onKeyDown={onEnterPress}
				rows="2"
				cols="150"
				placeholder="Comment here..."
				required
			/>
			<button style={{ display: "inline-block", width: "15%" }} type="submit">
				Send
			</button>
		</form>
	);
};

export default InputForm;
