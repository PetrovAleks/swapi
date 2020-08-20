import React from "react";
import "./logo.css";
import { Link } from "react-router-dom";
const Logo = () => {
	return (
		<h1 className="header-nav__logo navbar-dark navbar-brand ">
			<Link to="/">Star Wars API</Link>
		</h1>
	);
};
export default Logo;
