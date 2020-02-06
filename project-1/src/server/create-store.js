import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

// Root reducer
import reducers from '../client/reducers';

function createNewStore() {
	
	// Create Redux Store
	return createStore(reducers, applyMiddleware(reduxThunk));
}

export default createNewStore;