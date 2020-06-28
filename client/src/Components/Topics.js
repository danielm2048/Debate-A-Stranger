import React from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import { Button } from "../Styles/styledLayout";

import Suggestion from "./Suggestion";
import TopicList from "./TopicList";

let rand;

const Choices = ({ userName }) => {
	const topics = useStoreState((state) => state.topics);
	const setTopic = useStoreActions((actions) => actions.user.setTopic);

	const onClick = () => {
		rand = Math.floor(Math.random() * topics.length);
		setTopic(topics[rand]);
	};

	return (
		<div>
			<h1>Welcome {userName}</h1>
			<br />
			<Button width="100%" onClick={onClick}>
				Random Topic
			</Button>
			<TopicList />
			<Suggestion />
		</div>
	);
};

export default Choices;
