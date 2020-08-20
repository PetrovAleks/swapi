export default class SwapiService {
	_baseURL = "https://swapi.dev/api";
	_baseImg = "https://starwars-visualguide.com/assets/img";

	getResourse = async (url) => {
		const resourse = await fetch(this._baseURL + url);
		return await resourse.json();
	};

	getAllPeople = async () => {
		const res = await this.getResourse("/people/");
		return res.results.map(this._transformPerson);
	};

	getPersone = async (id) => {
		const person = await this.getResourse(`/people/${id}/`);
		return this._transformPerson(person);
	};

	getAllPlanets = async () => {
		const res = await this.getResourse("/planets/");
		return res.results.map(this._transformPlanet);
	};
	getPlanet = async (id) => {
		const planet = await this.getResourse(`/planets/${id}/`);
		return this._transformPlanet(planet);
	};

	getAllStarships = async () => {
		const res = await this.getResourse("/starships/");
		return res.results.map(this._transformStarship);
	};
	getStarship = async (id) => {
		const starship = await this.getResourse(`/starships/${id}/`);
		return this._transformStarship(starship);
	};
	getPersonImg = ({ id }) => {
		return `${this._baseImg}/characters/${id}.jpg`;
	};
	getStarshipImg = ({ id }) => {
		return `${this._baseImg}/starships/${id}.jpg`;
	};
	getPlanetImg = ({ id }) => {
		return `${this._baseImg}/planets/${id}.jpg`;
	};

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)\/$/;
		return item.url.match(idRegExp)[1];
	};

	_transformPlanet = (planet) => {
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter,
		};
	};
	_transformStarship = (starship) => {
		return {
			id: this._extractId(starship),
			name: starship.name,
			model: starship.model,
			manufacturer: starship.manufacturer,
			cosrtInCredits: starship.cost_in_credits,
			length: starship.length,
			crew: starship.crew,
			passengers: starship.passengers,
			cargoCapacity: starship.cargo_capacity,
		};
	};
	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			mass: person.mass,
			height: person.height,
			scinColor: person.skin_color,
		};
	};
}
