import styled from "styled-components";

const ChoiceButton = styled.button`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 165px;
	height: 165px;
	border-radius: 100%;
	border: 3px solid white;
	margin: 0 60px;
	outline: none;
	cursor: pointer;
	font-size: 2vw;
	background-color: #027dc9;
	box-shadow: 0 40px 65px 0 rgba(0, 0, 0, 0.4);
	transition: 0.3s;
	&:hover {
		opacity: 0.8;
	}
	&:active {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	}
	@media screen and (max-width: 768px) {
		width: 80px;
		height: 80px;
	}
`;

export default ChoiceButton;
