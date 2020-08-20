import React, { Component } from "react";
import "./app.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../header/header";
import RandomPlanet from "../random-planet/random-planet";
import AllertError from "../alerts-error/alerts-error";

import SwapiService from "../SwapiService/SwapiService";
import {
	PeoplePage,
	StarshipPage,
	PlanetPage,
	LoginPage,
	SecretPage,
} from "../pages";

export default class App extends Component {
	swapiService = new SwapiService();
	state = {
		err: false,
		isLoggedIn: false,
	};

	componentDidCatch() {
		this.setState({
			err: true,
		});
	}
	onLogin = () => {
		this.setState({
			isLoggedIn: true,
		});
	};

	render() {
		const { isLoggedIn } = this.state;
		console.log(isLoggedIn);
		if (this.state.err) {
			return <AllertError />;
		}

		return (
			<>
				<Router>
					<div className="wrapper-header">
						<Header />
					</div>
					<div className="container container-padding ">
						<RandomPlanet />
					</div>
					<>
						<Route
							path="/"
							render={() => (
								<h2 className=" title"> Welcome to Star Wars API </h2>
							)}
							exact
						/>
						<Route path="/people" component={PeoplePage} />
						<Route path="/starships" exact component={StarshipPage} />

						<Route path="/planet" component={PlanetPage} />
						<Route
							path="/login"
							render={() => {
								return (
									<LoginPage
										isLoggedIn={isLoggedIn}
										onLogin={() => this.onLogin()}
									/>
								);
							}}
						/>
						<Route
							path="/secret"
							render={() => {
								return <SecretPage isLoggedIn={isLoggedIn} />;
							}}
						/>
					</>
				</Router>
			</>
		);
	}
}
