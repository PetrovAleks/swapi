import React from "react";
import "./item-details.css";

const ItemDetails = (props) => {
	const { item } = props;
	const { name } = item;

	return (
		<div className=" persone_details-wrapper card mb-3 ">
			<h3 className="card-header">{name}</h3>
			<div className="d-flex">
				<img
					className="persone_details-img"
					src={props.imgUrl}
					alt={`${name}`}
				/>
				<div className="card-body">
					<ul className="list-group list-group-flush">
						{React.Children.map(props.children, (element) => {
							return React.cloneElement(element);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export { ItemDetails };
