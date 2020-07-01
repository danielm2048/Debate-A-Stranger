import styled from "styled-components";

const Modal = styled.div`
	display: ${({ modal }) => (modal ? "block" : "none")};
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
	padding-top: 60px;
	font-family: "Gotu", sans-serif;
`;

export default Modal;
