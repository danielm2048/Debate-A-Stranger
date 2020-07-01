import styled from "styled-components";

const Container = styled.div`
	position: relative;
	width: 300px;
	border: 2px solid;
	border-color: ${({ darker }) => (darker ? "#ccc" : "#dedede")};
	border-radius: 5px;
	background-color: ${({ darker }) => (darker ? "#ddd" : "#f1f1f1")};
	margin: ${({ darker }) => (darker ? "15px -60px 15px auto" : "15px -60px")};
	&::after {
		content: "";
		clear: both;
		display: table;
		position: absolute;
		left: ${({ darker }) => (darker ? "100%" : "none")};
		right: ${({ darker }) => (darker ? "none" : "100%")};
		bottom: 60%;
		width: 0;
		height: 0;
		border-bottom: 10px solid transparent;
		border-top: 10px solid transparent;
		border-left: ${({ darker }) => (darker ? "10px solid #ccc" : "none")};
		border-right: ${({ darker }) => (darker ? "none" : "10px solid #dedede")};
	}
	@media screen and (max-width: 768px) {
		width: 100px;
	}
`;

export default Container;
