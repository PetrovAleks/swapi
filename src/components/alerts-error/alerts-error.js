import React, { Component } from "react";

export default class AllertError extends Component {
	render() {
		const { onCloseErr } = this.props;

		return (
			<>
				<div className="alert alert-dismissible alert-warning">
					<button
						onClick={() => onCloseErr()}
						type="button"
						className="close"
						data-dismiss="alert"
					>
						&times;
					</button>
					<h4 className="alert-heading">Оуууппс!</h4>
					<p className="mb-0">
						Все наши сервера захватила Империя, простите =(
					</p>
				</div>
			</>
		);
	}
}
