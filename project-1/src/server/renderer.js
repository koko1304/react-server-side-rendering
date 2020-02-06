import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

// Routes
import Routes from '../client/routes';

export default (req, store) => {

	// renderToString generate react component to html string

	// Replace Route with renderRoutes by passing an array of routes
	return renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<div className="container">{renderRoutes(Routes)}</div>
			</StaticRouter>
		</Provider>
	);
	/* 
		In Server side rendering we need to use
		StaticRouter instead of BrowserRouter
		and you have to provide path to it for
		figure out which route user are in by using
		location 
	*/
};

