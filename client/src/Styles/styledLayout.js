import styled from "styled-components";

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 75%;
	max-height: 800px;
	background-color: #f2f2f2;
	padding: 25px 100px 75px 100px;
	border: 1px solid lightgrey;
	border-radius: 3px;
	color: black;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		width: 40%;
		max-height: 350px;
	}
`;

export const WelcomeInput = styled.input`
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
`;

export const Select = styled.select`
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
`;

export const Button = styled.button`
	background-color: #027dc9;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: ${(props) => props.width};
	&:hover {
		opacity: 0.8;
	}
`;

export const YayOrNayButton = styled.button`
	display: block;
	width: 165px;
	height: 165px;
	padding: 15px;
	border-radius: 100%;
	border: 3px solid white;
	margin: 0 60px;
	outline: none;
	cursor: pointer;
	font-size: 42px;
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
		font-size: 24px;
	}
`;
