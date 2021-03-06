import React from "react";
import { Redirect } from "react-router-dom";
const LoginPage = ({ isLoggedIn, onLogin }) => {
	if (!isLoggedIn) {
		return (
			<div className="jumbotron">
				<p>Login to see secret page!</p>
				<button className="btn btn-primary" onClick={onLogin}>
					Login
				</button>
			</div>
		);
	}
	return <Redirect to="/" />;
};

export default LoginPage;
