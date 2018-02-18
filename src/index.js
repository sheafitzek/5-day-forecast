import React from 'react';
import {render} from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';

import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import App from './components/App';

const store = applyMiddleware(ReduxPromise)(createStore);

render(
	<Provider store={store(reducers)}>
		<App />
	</Provider>,
	document.getElementById(`root`)
);

registerServiceWorker();
