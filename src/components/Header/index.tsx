import * as React from 'react';
import LogoSvg from '../../assets/images/logo.svg';
import { Header, Logo } from './styles';

const Home: React.FC = () => {
	return (
		<Header>
			<Logo src={String(LogoSvg)} />
		</Header>
	);
};

export default Home;
