import React from "react";
import { useStoreActions } from "easy-peasy";
import socketIOClient from "socket.io-client";

import ChoiceButton from "./ChoiceButton";

const ENDPOINT = "http://localhost:4000";

const Choice = ({ userName, topic }) => {
	const setYayOrNay = useStoreActions((actions) => actions.user.setYayOrNay);

	const onClick = (e) => {
		setYayOrNay(e.target.id);

		const socket = socketIOClient(ENDPOINT);
		socket.emit("startDebate", { userName, topic, stance: e.target.id });
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<ChoiceButton id="Yay" onClick={onClick}>
				Yay
			</ChoiceButton>
			<h1 style={{ wordWrap: "break-word" }}>{topic}</h1>
			<ChoiceButton id="Nay" onClick={onClick}>
				Nay
			</ChoiceButton>
		</div>
	);
};

export default Choice;
