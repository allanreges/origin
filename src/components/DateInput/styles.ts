import styled from 'styled-components';

export const Container = styled.label`
	position: relative;
	padding: 3px 20px;
	border: 1px solid #e9eef2;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 56px;

	@media (min-width: 720px) {
		width: 192px;
	}

	button {
		position: absolute;
		background: none;
		border: none;
		padding: 5px;
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

export const Input = styled.input`
	font-family: Rubik, sans-serif;
	font-size: 24px;
	border: none;
	color: #4d6475;
	line-height: 0;
	max-width: 100%;
	opacity: 0;
	position: absolute;
	left: 0;
`;

export const ArrowButtonLeft = styled.button`
	left: 0;
	right: auto;
	transform: translateX(15px);
	z-index: 2;
`;

export const ArrowButtonRight = styled.button`
	left: auto;
	right: 0;
	transform: translateX(-15px);
	z-index: 2;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

	p {
		line-height: 1.5;
		font-size: 14px;
		text-align: center;

		@media (min-width: 720px) {
			font-size: 16px;
		}

		span {
			font-weight: 600;
		}
	}
`;
