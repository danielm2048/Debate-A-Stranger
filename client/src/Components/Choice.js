import React from "react";
import { useStoreActions } from "easy-peasy";
import socketIOClient from "socket.io-client";

import { YayOrNayButton } from "../Styles/styledLayout";

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
			<YayOrNayButton id="Yay" onClick={onClick}>
				Yay
			</YayOrNayButton>
			<h1 style={{ wordWrap: "break-word" }}>{topic}</h1>
			<YayOrNayButton id="Nay" onClick={onClick}>
				Nay
			</YayOrNayButton>
		</div>
	);
};

export default Choice;
