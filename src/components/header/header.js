import React, { Component } from "react";
import "./header.css";
import Logo from "./logo/logo";
import { Link } from "react-router-dom";

export default class Header extends Component {
	render() {
		return (
			<header className="header" id="navbarColor02">
				<nav className="header-nav navbar navbar-expand-lg navbar-dark bg-dark">
					<Logo />
					<ul className="navbar-nav mr-auto header-nav__list">
						<li className=" header-nav__item nav-link">
							<Link to="/people">People</Link>
						</li>
						<li className=" header-nav__item nav-link">
							<Link to="/planet">Planets</Link>
						</li>
						<li className=" header-nav__item nav-link">
							<Link to="/starships">Starships</Link>
						</li>
						<li className=" header-nav__item nav-link">
							<Link to="/login">Login</Link>
						</li>
						<li className=" header-nav__item nav-link">
							<Link to="/secret">Secret</Link>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
