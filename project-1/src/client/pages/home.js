import React from 'react';

const Home = () => {
	return (
		<div>
			<h1>Hello, World!</h1>
			<button onClick={() => console.log("Hi, There!")}>Greeting</button>
		</div>
	);
}

export default {
	component: Home
};