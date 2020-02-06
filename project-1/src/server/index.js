import 'babel-polyfill';
import express from 'express';
import serialize from 'serialize-javascript';
import { matchRoutes } from 'react-router-config';

// renderer
import renderer from './renderer';

// Routes
import Routes from '../client/routes';

// Create Store Function
import createNewStore from './create-store';

const app = express();
const port = process.env.PORT || 3000;

// Set up template engine
app.set('views', 'src/server/views');
app.set('view engine', 'ejs');

// Set up static file location
app.use(express.static('build/client'));

app.get('*', (req, res) => {

	const store = createNewStore();

	const promises = matchRoutes(Routes, req.path).map(({route}) => {
		return route.loadData ? route.loadData(store) : null;
	});

	Promise.all(promises).then(() => {
		
		// store.getState() is using to get all the existing state from the store
		res.render('home', { content: renderer(req, store), state: serialize(store.getState()) });

	});
	
});

app.listen(port, () => {
	console.log('Server listening on port', port);
});