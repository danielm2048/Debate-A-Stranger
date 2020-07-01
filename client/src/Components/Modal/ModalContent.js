import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

const ModalContent = styled.form`
	position: relative;
	background-color: #fefefe;
	margin: 5% auto 15% auto;
	border: 1px solid #888;
	width: 40%;
	animation: ${slideDown} 1s;
	@media screen and (max-width: 768px) {
		width: 80%;
	}
`;

export default ModalContent;
