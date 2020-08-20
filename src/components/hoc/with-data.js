import React, { Component } from "react";
import Error from "../alerts-error/alerts-error";

import Spiner from "../spiner/spiner";

const withData = (Vewi, getData) => {
	return class extends Component {
		state = {
			data: "",
			loading: false,
			error: false,
		};

		componentDidMount() {
			getData()
				.then((data) => {
					this.setState({
						data,
					});
				})
				.catch(() => {
					this.setState({
						error: true,
					});
				});
		}
		render() {
			const { renderItem, onItemSelected } = this.props;
			const { data } = this.state;
			if (!data) {
				return <Spiner />;
			}
			if (this.state.error) {
				return <Error />;
			}

			return (
				<Vewi
					renderItem={renderItem}
					onItemSelected={onItemSelected}
					data={data}
				/>
			);
		}
	};
};

export default withData;
