import React, { Component } from "react";
import Row from "../row/row";
import { PersoneDetails, PersoneList } from "../sw-components";

export default class PeoplePage extends Component {
	state = {
		selectedItem: 2,
	};
	render() {
		const personDetails = <PersoneDetails itemId={this.state.selectedItem} />;
		const personeList = (
			<PersoneList
				onItemSelected={this.onItemSelected}
				renderItem={({ name, gender }) => {
					return `${name} (${gender})`;
				}}
			/>
		);
		return <Row leftElement={personeList} rightElement={personDetails} />;
	}
	onItemSelected = (id) => {
		this.setState({
			selectedItem: id,
		});
	};
}
