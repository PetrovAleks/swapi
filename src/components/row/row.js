import React from "react";

const Row = ({ leftElement, rightElement }) => {
	return (
		<div className="container container-padding d-flex ">
			{leftElement}
			{rightElement}
		</div>
	);
};

export default Row;
