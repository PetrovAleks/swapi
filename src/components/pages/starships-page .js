import React, { Component } from "react";
import Row from "../row/row";
import { StarshipDetails, StarshipList } from "../sw-components";

export default class StarshipPage extends Component {
	state = {
		selectedItem: 5,
	};
	render() {
		const starshipList = (
			<StarshipList
				onItemSelected={this.onItemSelected}
				renderItem={({ name, gender }) => {
					return `${name} (${gender})`;
				}}
			/>
		);
		const starshipDetails = (
			<StarshipDetails itemId={this.state.selectedItem} />
		);
		return <Row leftElement={starshipList} rightElement={starshipDetails} />;
	}
	onItemSelected = (id) => {
		console.log(id);
		this.setState({
			selectedItem: id,
		});
	};
}
