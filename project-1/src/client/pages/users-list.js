import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

// Action Creators
import { fetchUsers } from '../actions';

class UsersList extends Component {
	componentWillMount() {
		this.props.fetchUsers();
	}

	createUserItems() {
		return _.map(this.props.users, (user, key) => {
			return <li className="list-group-item" key={key}>{user.name}</li>
		});
	}

	render() {
		if (!this.props.users) {
			return <div>Loading...</div>
		};

		return (
			<ul className="list-group">
				{this.createUserItems()}
			</ul>
		);
	}
}

function loadData(store) {

	return store.dispatch(fetchUsers());
}

export default {
	component: connect(({users}) => ({users}), { fetchUsers })(UsersList),
	loadData
};