import React, { Component } from "react";
import SwapiService from "../SwapiService/SwapiService";
import Spiner from "../spiner/spiner";
import "./random-planet.css";
import AllertError from "../alerts-error/alerts-error.js";

export default class RandomPlanet extends Component {
	SwapiService = new SwapiService();
	state = {
		planet: {},
		loading: true,
		err: false,
	};
	onCloseErr = () => {
		this.setState({
			err: false,
		});
	};

	componentDidMount() {
		this.updateplanet(this.state.id);
		setInterval(this.updateplanet, 2500);
	}

	onPlanetloader = (planet) => {
		this.setState({
			planet,
		});
	};
	onError = (err) => {
		this.setState({
			err: true,
		});
	};

	updateplanet = () => {
		const id = Math.floor(Math.random() * 15) + 3;
		this.SwapiService.getPlanet(id)
			.then(this.onPlanetloader)
			.catch(this.onError)
			.finally(() => {
				this.setState({
					loading: false,
				});
			});
	};

	render() {
		const { loading, planet, err } = this.state;
		const spiner = loading ? <Spiner /> : null;
		const content = !loading ? <PlanetWiew planet={planet} /> : null;
		const error = err ? <AllertError onCloseErr={this.onCloseErr} /> : null;
		return (
			<>
				<section className="random_planet card  ">
					<div className="d-flex justify-content-center ">
						{error}
						{content}
						{spiner}
					</div>
				</section>
			</>
		);
	}
}

const PlanetWiew = ({ planet }) => {
	const { population, rotationPeriod, diameter, name, id } = planet;
	return (
		<>
			<div className="wrapper-img">
				<img
					className="random_planet__img"
					alt=""
					src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
				></img>
			</div>
			<div className=" wrapper-planet__text">
				<h2 className="random_planet__title  card-title ">{name}</h2>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Популяция {population} житилей</li>
					<li className="list-group-item">
						Период Вращения {rotationPeriod} часа
					</li>
					<li className="list-group-item">Диаметер {diameter} км</li>
				</ul>
			</div>
		</>
	);
};
