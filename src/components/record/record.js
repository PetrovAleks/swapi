import React, { Component } from "react";

class RecordItemList extends Component {
	render() {
		const {
			data: { data },
		} = this.props;
		return (
			<li className="list-group-item">
				{this.props.label}: <b>{data[this.props.field]}</b>
			</li>
		);
	}
}

export default RecordItemList;
