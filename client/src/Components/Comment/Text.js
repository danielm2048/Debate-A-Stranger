import styled from "styled-components";

const Text = styled.p`
	margin-top: 20px;
	text-align: left;
	font-size: 18px;
	word-wrap: break-word;
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
`;

export default Text;
