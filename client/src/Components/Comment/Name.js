import styled from "styled-components";

const Name = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 14px;
	color: ${({ color }) => (color === "right" ? "red" : "blue")};
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export default Name;
