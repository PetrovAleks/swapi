import React from "react";

import "./item-list.css";

const ItemList = (props) => {
	const { data, onItemSelected, renderItem } = props;

	const items = data.map((item) => {
		const { id } = item;
		const label = renderItem(item);

		return (
			<li
				key={id}
				className="people-item list-group-item d-flex justify-content-between align-items-center"
				onClick={() => onItemSelected(id)}
			>
				{label}
			</li>
		);
	});

	return (
		<div className="list-wrapper  card mb-3">
			<ul className="list-group">{items}</ul>
		</div>
	);
};

export default ItemList;
