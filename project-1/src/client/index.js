import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { renderRoutes } from 'react-router-config';

// Routes
import Routes from './routes';

// Root Reducer
import reducers from './reducers';

// Create Redux Store
const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(reduxThunk));

// Replace Route with renderRoutes by passing an array of routes
ReactDOM.hydrate(
	<Provider store={store}>
		<BrowserRouter>
			<div className="container">{renderRoutes(Routes)}</div>
		</BrowserRouter>
	</Provider>, 
	document.querySelector('#app-root')
);