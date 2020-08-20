import React from "react";

export default function Spiner() {
	return (
		<div className="d-flex justify-content-center d-none">
			<div className="spinner-border text-warning" role="status">
				<span className="sr-only ">Loading...</span>
			</div>
		</div>
	);
}
