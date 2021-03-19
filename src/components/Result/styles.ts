import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const Container = styled.div`
	border: 1px solid #e9eef2;
	box-sizing: border-box;
	border-radius: 8px;
	margin-top: 24px;
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 24px 32px 0 32px;
	align-items: center;

	h2 {
		font-size: 18px;
		line-height: 1.2;
		font-weight: 400;
		color: #1e2a32;

		@media (min-width: 720px) {
			font-size: 20px;
		}
	}
`;

export const Amount = styled(NumberFormat)`
	font-size: 24px;
	font-family: Rubik, sans-serif;
	color: #0079ff;
	line-height: 1.2;

	@media (min-width: 720px) {
		font-size: 32px;
	}
`;

export const BottomAmount = styled(NumberFormat)`
	font-size: 12px;
	color: #1c1e1f;
	font-weight: 600;
`;

export const Bottom = styled.div`
	margin: 16px 0 0 0;
	padding: 24px 32px;
	background: #f4f8fa;

	p {
		font-size: 12px;
		color: #1c1e1f;
		line-height: 1.3;
		text-align: center;

		@media (min-width: 720px) {
			text-align: left;
		}

		span {
			font-weight: 600;
		}
	}
`;
