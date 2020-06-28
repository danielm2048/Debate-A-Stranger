import styled from "styled-components";

export const Chatbox = styled.div`
	display: block;
	/* margin: 0 auto; */
	width: 1000px;
	height: 500px;
	border: 2px solid;
	border-color: ${(props) => (props.darker ? "#ccc" : "#dedede")};
	border-radius: 5px;
	background-color: ${(props) => (props.darker ? "#ddd" : "#f1f1f1")};
	padding: 20px 100px;
	overflow: auto;
	@media screen and (max-width: 768px) {
		width: 100px;
		max-height: 150px;
		overflow: scroll;
	}
`;

export const Container = styled.div`
	position: relative;
	width: 300px;
	border: 2px solid;
	border-color: ${(props) => (props.darker ? "#ccc" : "#dedede")};
	border-radius: 5px;
	background-color: ${(props) => (props.darker ? "#ddd" : "#f1f1f1")};
	/* padding: 10px; */
	margin: ${(props) => (props.darker ? "15px -60px 15px auto" : "15px -60px")};
	/* overflow: hidden; */
	&::after {
		content: "";
		clear: both;
		display: table;
		position: absolute;
		left: ${(props) => (props.darker ? "100%" : "none")};
		right: ${(props) => (props.darker ? "none" : "100%")};
		bottom: 60%;
		width: 0;
		height: 0;
		border-bottom: 10px solid transparent;
		border-top: 10px solid transparent;
		border-left: ${(props) => (props.darker ? "10px solid #ccc" : "none")};
		border-right: ${(props) => (props.darker ? "none" : "10px solid #dedede")};
	}
	@media screen and (max-width: 768px) {
		width: 100px;
	}
`;

export const Name = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 14px;
	color: ${(props) => (props.color === "right" ? "red" : "blue")};
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Text = styled.p`
	margin-top: 20px;
	text-align: left;
	font-size: 18px;
	word-wrap: break-word;
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export const Time = styled.span`
	font-size: 14px;
	float: ${(props) => props.float};
	color: ${(props) => (props.float === "right" ? "#aaa" : "#999")};
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;
