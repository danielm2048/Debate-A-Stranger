import React from "react";
import { useStoreState } from "easy-peasy";
import { Container, Name, Text, Time } from "../Styles/styledForm";

const Comment = ({ userName, mess, time }) => {
	const ownUserName = useStoreState((state) => state.user.userName);

	const side = userName === ownUserName ? "left" : "right";
	return (
		<Container darker={side === "right"}>
			<Name color={side}>{userName}</Name>
			<Text>{mess}</Text>
			<Time float={side === "right" ? "left" : "right"}>{time}</Time>
		</Container>
	);
};

export default Comment;
