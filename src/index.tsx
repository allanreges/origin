import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './styles/global';
import App from './App';

const rootElement = document.getElementById('root');
render(
	<Provider store={store}>
		<App />
		<GlobalStyle />
	</Provider>,
	rootElement
);
