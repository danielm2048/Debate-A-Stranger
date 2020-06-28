import React, { useRef, useEffect, useState } from "react";
import io from "socket.io-client";

import InputForm from "./InputForm";
import Comment from "./Comment";

import { Chatbox } from "../Styles/styledForm";

let socket;

const DebateForm = ({ userName, topic, yayOrNay }) => {
	const [messages, setMessages] = useState([]);

	const ENDPOINT = "https://debate-stranger.herokuapp.com";

	useEffect(() => {
		socket = io(ENDPOINT);

		socket.emit("startDebate", { userName, topic, stance: yayOrNay });
	}, [ENDPOINT, userName, topic, yayOrNay]);

	useEffect(() => {
		socket.on("message", (msg) => {
			setMessages((messages) => [
				...messages,
				<Comment
					userName={msg.userName}
					mess={msg.text}
					time={msg.time}
					key={messages.length}
				/>,
			]);
		});
	}, []);

	const messagesEndRef = useRef(null);
	const scrollToBottom = () => {
		messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
	};
	useEffect(scrollToBottom, [messages]);

	const sendMessage = (comm) => {
		socket.emit("chatMessage", comm);
	};

	return (
		<div>
			<h1>
				{topic}: you are {yayOrNay}
			</h1>
			<Chatbox>
				{messages}
				<div ref={messagesEndRef} />
			</Chatbox>
			<InputForm sendMessage={sendMessage} />
		</div>
	);
};

export default DebateForm;
