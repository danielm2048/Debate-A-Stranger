import styled from "styled-components";

const Chatbox = styled.div`
	display: block;
	width: 1000px;
	height: 500px;
	border: 2px solid;
	border-color: "#dedede";
	border-radius: 5px;
	background-color: "#ddd";
	padding: 20px 100px;
	overflow: auto;
	@media screen and (max-width: 768px) {
		width: 100px;
		max-height: 150px;
		overflow: scroll;
	}
`;

export default Chatbox;
