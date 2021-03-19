import styled from 'styled-components';

export const Container = styled.div`
	background: white;
	padding: 24px;
	border-radius: 8px;
	box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
	width: 560px;
	max-width: 100%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 720px) {
		padding: 40px;
	}
`;

export const Header = styled.div`
	display: flex;
	width: 100%;

	div {
		margin: 8px 0 0 16px;
		h2 {
			font-family: 'Rubik', sans-serif;
			font-size: 20px;
			color: #1e2a32;
			line-height: 1.2;
			margin: 0;
		}

		p {
			color: #708797;
			font-size: 14px;
			line-height: 1.5;
			margin-top: 4px;
		}

		@media (min-width: 720px) {
			div {
				h2 {
					font-size: 24px;
				}

				p {
					font-size: 16px;
				}
			}
		}
	}
`;

export const Content = styled.div`
	width: 100%;
`;

export const Inputs = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;

	@media (min-width: 720px) {
		flex-direction: row;
	}

	div {
		box-sizing: border-box;
	}
`;

export const Result = styled.div``;
