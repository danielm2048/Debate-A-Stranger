import React, { useState } from "react";
import { useStoreActions } from "easy-peasy";

import Button from "./Layout/Button";
import Input from "./Layout/Input";

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

				<Input
					type="text"
					value={userNameField}
					onChange={(e) => setUserNameField(e.target.value)}
					placeholder="Choose your username..."
					name="name"
					width="80%"
					required
				/>

				<Button type="submit" width="100%">
					Enter
				</Button>
			</form>
		</div>
	);
};

export default Welcome;
