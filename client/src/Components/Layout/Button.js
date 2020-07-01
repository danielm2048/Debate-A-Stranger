import styled from "styled-components";

const Button = styled.button`
	background-color: ${({ color }) => (color ? color : "#027dc9")};
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: ${({ width }) => width};
	&:hover {
		opacity: 0.8;
	}
`;

export default Button;
