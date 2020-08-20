import React, { Component } from "react";
import Row from "../row/row";
import { PlanetDetails, PlanetList } from "../sw-components";

export default class PlanetPage extends Component {
	state = {
		selectedItem: 2,
	};
	render() {
		const planetList = (
			<PlanetList
				onItemSelected={this.onItemSelected}
				renderItem={({ name, gender }) => {
					return `${name} (${gender})`;
				}}
			/>
		);
		const planetDetals = <PlanetDetails itemId={this.state.selectedItem} />;
		return <Row leftElement={planetList} rightElement={planetDetals} />;
	}
	onItemSelected = (id) => {
	
		this.setState({
			selectedItem: id,
		});
	};
}
