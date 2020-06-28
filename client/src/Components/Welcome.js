import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";
import { Button } from "../Styles/styledLayout";

const Welcome = () => {
	const [userNameField, setUserNameField] = useState("");

	const setUserName = useStoreActions((actions) => actions.user.setUserName);

	const onSubmit = (e) => {
		e.preventDefault();

		setUserName(userNameField);
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<label htmlFor="name">
					<b>Enter your Username:</b>
				</label>

				<input
					type="text"
					value={userNameField}
					onChange={(e) => setUserNameField(e.target.value)}
					placeholder="Choose your username..."
					name="name"
					className="welcome-input"
					required
					style={{
						width: "80%",
						padding: "12px 20px",
						margin: "8px 0",
						display: "inline-block",
						border: "1px solid #ccc",
					}}
				/>

				<Button type="submit" width="100%">
					Enter
				</Button>
			</form>
		</div>
	);
};

export default Welcome;
