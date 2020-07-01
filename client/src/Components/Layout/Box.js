import styled from "styled-components";

const Box = styled.div`
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

export default Box;
