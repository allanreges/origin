import styled from 'styled-components';
import NumberFormat from 'react-number-format';

export const Container = styled.label`
	position: relative;
	padding: 13px 17px 13px 44px;
	border: 1px solid #e9eef2;
	border-radius: 4px;
	display: flex;
	align-items: center;
	width: 100%;
	height: 56px;

	@media (min-width: 720px) {
		width: 272px;
	}
`;
export const Label = styled.p`
	font-size: 12px;
	line-height: 1.5;
	margin: 28px 0 4px 0;
	color: #1e2a32;

	@media (min-width: 720px) {
		font-size: 14px;
	}
`;
export const Icon = styled.img`
	position: absolute;
	transform: translateX(-28px);
`;

export const Input = styled(NumberFormat)`
	font-family: Rubik, sans-serif;
	font-size: 20px;
	border: none;
	color: #4d6475;
	max-width: 100%;

	@media (min-width: 720px) {
		font-size: 24px;
	}
`;
