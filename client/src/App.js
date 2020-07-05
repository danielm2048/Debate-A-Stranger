import React from "react";
import "./App.css";
import { CodeAlt, Heart } from "@styled-icons/boxicons-regular";

import Box from "./Components/Layout/Box";

import { useStoreState } from "easy-peasy";

import Welcome from "./Components/Welcome";
import Topics from "./Components/Topics/Topics";
import Debate from "./Components/Debate";

function App() {
	const { userName, topic } = useStoreState((state) => state.user);

	return (
		<div className="App">
			<header className="App-header">
				<div className="header">Debate A Stranger</div>
				<Box>
					{userName === "" ? (
						<Welcome />
					) : topic === "" ? (
						<Topics userName={userName} />
					) : (
						<Debate />
					)}
				</Box>
				<div className="footer">
					<CodeAlt size="28" /> with <Heart size="26" /> by Daniel Mimoun
				</div>
			</header>
		</div>
	);
}

export default App;
