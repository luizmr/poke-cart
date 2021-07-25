import React from 'react';
import { Routes } from './routes';

// utils
import { connect } from 'react-redux';

const App = ({ theme }) => {
	return (
		<div className={theme}>
			<Routes />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		theme: state.theme.theme,
	};
};

export default connect(mapStateToProps)(App);
