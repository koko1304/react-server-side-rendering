import axios from 'axios';

const URL = 'https://react-ssr-api.herokuapp.com';

export function fetchUsers() {
	/*
	The word “async” before a function means one simple thing: a function always returns a promise. If the code has return <non-promise> in it, then JavaScript automatically wraps it into a resolved promise with that value.

	async function f() {
	  return 1;
	}

	f().then(alert); // 1
	*/
	return async dispatch => {
		
		// await only works inside async functions
		// The keyword await makes JavaScript wait until that promise settles and returns its result
		const request = await axios(`${URL}/users`);

		dispatch({
			type: 'FETCH_USERS',
			payload: request
		});
	};
}