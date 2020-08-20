import React from "react";
import RecordItemList from "../record/record";
import SwapiService from "../SwapiService/SwapiService";
import withDataDetails from "../hoc/with-data-details";
import { ItemDetails } from "../item-details/item-details";

const swapiService = new SwapiService();
const {
	getPersone,
	getPlanet,
	getStarship,
	getPlanetImg,
	getStarshipImg,
	getPersonImg,
} = swapiService;

const DetailsPerson = (data) => {
	return (
		<>
			<RecordItemList data={data} label="Пол" field="gender" />
			<RecordItemList data={data} label="Цвет глаз" field="eyeColor" />
			<RecordItemList data={data} label="Год рождения" field="birthYear" />
			<RecordItemList data={data} label="Вес" field="mass" />
			<RecordItemList data={data} label="Рост" field="height" />
			<RecordItemList data={data} label="Цвет Кожи" field="scinColor" />
		</>
	);
};
const DetailsPlanet = (data) => {
	return (
		<>
			<RecordItemList data={data} label="Насиление" field="population" />
			<RecordItemList
				data={data}
				label="Период Вращения"
				field=" rotationPeriod"
			/>
			<RecordItemList data={data} label="Диаметр" field="diameter" />
		</>
	);
};
const DetailsStarship = (data) => {
	return (
		<>
			<RecordItemList data={data} label="Модель" field="model" />
			<RecordItemList data={data} label="Производитель" field="manufacturer" />
			<RecordItemList data={data} label="Цена" field="cosrtInCredits" />
			<RecordItemList data={data} label="Длинна" field="length" />
			<RecordItemList data={data} label="Экипаж" field="crew" />
			<RecordItemList data={data} label="Пассажиры" field="crew" />
			<RecordItemList
				data={data}
				label="Грузоподьемность"
				field="cargoCapacity"
			/>
		</>
	);
};
const PersoneDetails = withDataDetails(
	ItemDetails,
	getPersone,
	getPersonImg,
	DetailsPerson
);

const PlanetDetails = withDataDetails(
	ItemDetails,
	getPlanet,
	getPlanetImg,
	DetailsPlanet
);
const StarshipDetails = withDataDetails(
	ItemDetails,
	getStarship,
	getStarshipImg,
	DetailsStarship
);

export { PersoneDetails, PlanetDetails, StarshipDetails };
