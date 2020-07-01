import styled from "styled-components";

const Input = styled.input`
	width: ${({ width }) => (width ? width : "100%")};
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
`;

export default Input;
