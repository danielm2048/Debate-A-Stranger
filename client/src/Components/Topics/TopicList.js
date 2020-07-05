import React, { useState, useEffect, useRef } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import Button from "../Layout/Button";
import Select from "../Layout/Select";
import Modal from "../Modal/Modal";
import ModalContent from "../Modal/ModalContent";
import ModalActions from "../Modal/ModalActions";
import Close from "../Modal/Close";

const TopicList = () => {
	const topics = useStoreState((state) => state.topics);
	const setTopic = useStoreActions((actions) => actions.user.setTopic);

	const [modal, setModal] = useState(false);
	const [listChoice, setListChoice] = useState(topics[0]);

	const toggle = () => {
		setModal(false);
		setListChoice(topics[0]);
	};

	const ref = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setModal(false);
				setListChoice(topics[0]);
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
					<Close onClick={toggle} title="Close">
						&times;
					</Close>
					<ModalActions>
						<label htmlFor="topics">
							<strong>Topic List:</strong>
						</label>
						<br />
						<Select
							value={listChoice}
							name="topics"
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

						<Button type="submit" color="tomato" width="95%">
							Choose Topic
						</Button>
					</ModalActions>
				</ModalContent>
			</Modal>
		</>
	);
};

export default TopicList;
