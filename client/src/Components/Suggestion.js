import React, { useState, useEffect, useRef } from "react";

import Button from "./Layout/Button";
import Input from "./Layout/Input";
import Modal from "./Modal/Modal";
import ModalContent from "./Modal/ModalContent";
import ModalActions from "./Modal/ModalActions";
import Close from "./Modal/Close";

const Suggestion = () => {
	const [modal, setModal] = useState(false);
	const [suggestion, setSuggestion] = useState("");

	const toggle = () => {
		setModal(false);
		setSuggestion("");
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setModal(false);
			setSuggestion("");
		}
	};

	const ref = useRef(null);
	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<>
			<Button width="100%" onClick={() => setModal(true)}>
				Suggest Topic
			</Button>

			<Modal modal={modal}>
				<ModalContent
					ref={ref}
					onSubmit={(e) => {
						e.preventDefault();

						toggle();

						alert("Thank you for your suggestion!");
					}}
				>
					<Close onClick={toggle} title="Close">
						&times;
					</Close>
					<ModalActions>
						<label htmlFor="suggest">
							<strong>Suggestion:</strong>
						</label>
						<br />
						<Input
							type="text"
							value={suggestion}
							placeholder="Enter your suggestion..."
							name="suggest"
							onChange={(e) => {
								setSuggestion(e.target.value);
							}}
							width="90%"
							required
						/>

						<Button type="submit" color="tomato" width="95%">
							Send
						</Button>
					</ModalActions>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Suggestion;
