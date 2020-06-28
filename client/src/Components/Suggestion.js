import React, { useState, useEffect, useRef } from "react";
import { Button } from "../Styles/styledLayout";
import {
	Modal,
	ModalContent,
	ModalActions,
	ModalInput,
	ModalButton,
	ModalImgContainer,
	Close,
	ModalError,
} from "../Styles/styledModal";

const Suggestion = () => {
	const [modal, setModal] = useState(false);
	const [suggestion, setSuggestion] = useState("");
	const [error, setError] = useState(null);

	const toggle = () => {
		setModal(false);
		setSuggestion("");
		setError(null);
	};

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setModal(false);
			setSuggestion("");
			setError(null);
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
					<ModalImgContainer>
						<Close onClick={toggle} title="Close">
							&times;
						</Close>
						{/* <ModalImg src="/logo.png" alt="logo" /> */}
					</ModalImgContainer>
					<ModalActions>
						{error ? (
							<ModalError>
								<strong>{error}</strong>
							</ModalError>
						) : null}

						<label htmlFor="suggest">
							<strong>Suggestion:</strong>
						</label>

						<ModalInput
							type="text"
							value={suggestion}
							placeholder="Enter your suggestion..."
							name="suggest"
							onChange={(e) => {
								setSuggestion(e.target.value);
							}}
							required
						/>

						<ModalButton type="submit">Send</ModalButton>
					</ModalActions>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Suggestion;
