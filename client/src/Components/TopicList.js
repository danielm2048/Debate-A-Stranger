import React, { useState, useEffect, useRef } from "react";
import { Button, Select } from "../Styles/styledLayout";
import {
	Modal,
	ModalContent,
	ModalActions,
	ModalButton,
	ModalImgContainer,
	Close,
	ModalError,
} from "../Styles/styledModal";
import { useStoreActions, useStoreState } from "easy-peasy";

const TopicList = () => {
	const topics = useStoreState((state) => state.topics);
	const setTopic = useStoreActions((actions) => actions.user.setTopic);

	const [modal, setModal] = useState(false);
	const [listChoice, setListChoice] = useState(topics[0]);
	const [error, setError] = useState(null);

	const toggle = () => {
		setModal(false);
		setListChoice(topics[0]);
		setError(null);
	};

	const ref = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setModal(false);
				setListChoice(topics[0]);
				setError(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, topics]);

	return (
		<>
			<Button width="100%" onClick={() => setModal(true)}>
				Select Topic
			</Button>

			<Modal modal={modal}>
				<ModalContent
					ref={ref}
					onSubmit={(e) => {
						e.preventDefault();

						setTopic(listChoice);
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
							<strong>Topic List:</strong>
						</label>

						<Select
							style={{ fontSize: 20 }}
							value={listChoice}
							placeholder="Enter your suggestion..."
							name="suggest"
							onChange={(e) => {
								setListChoice(e.target.value);
							}}
							required
						>
							{topics.map((topic, i) => (
								<option key={i} value={topic}>
									{topic}
								</option>
							))}
						</Select>

						<ModalButton type="submit">Choose Topic</ModalButton>
					</ModalActions>
				</ModalContent>
			</Modal>
		</>
	);
};

export default TopicList;
