import React from 'react';

// Components
import HomePage from './pages/home';
import UsersListPage from './pages/users-list';

/* exact equal exact match */
// Using routes as array just try to solve redux issue
export default [
	{
		...HomePage,
		path: '/',
		exact: true
	},
	{
		...UsersListPage,
		path: '/users'
	}
];