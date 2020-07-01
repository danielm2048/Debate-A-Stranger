import styled from "styled-components";

const Time = styled.span`
	font-size: 14px;
	float: ${({ float }) => float};
	color: ${({ float }) => (float === "right" ? "#aaa" : "#999")};
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export default Time;
