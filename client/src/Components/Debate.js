import React from "react";
import { useStoreState } from "easy-peasy";

import Choice from "./Choice";
import DebateForm from "./DebateForm";

const Debate = () => {
	const { userName, topic, yayOrNay } = useStoreState((state) => state.user);

	return yayOrNay ? (
		<DebateForm userName={userName} topic={topic} yayOrNay={yayOrNay} />
	) : (
		<Choice userName={userName} topic={topic} />
	);
};

export default Debate;
