import * as React from 'react';
import Header from './components/Header';
import Home from './containers/Home';

const App: React.FunctionComponent = () => {
	return (
		<>
			<Header />
			<Home />
		</>
	);
};

export default App;
