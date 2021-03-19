import * as React from 'react';
import { ButtonLabel } from './styles';

type Props = {
	children: string;
};

const Button: React.FC<Props> = ({ children }) => {
	return <ButtonLabel>{children}</ButtonLabel>;
};

export default Button;
