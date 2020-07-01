import styled from "styled-components";

const Close = styled.span`
	position: absolute;
	right: 25px;
	top: 0;
	color: #000;
	font-size: 30px;
	font-weight: bold;
	&:hover,
	&:focus {
		color: red;
		cursor: pointer;
	}
`;

export default Close;
