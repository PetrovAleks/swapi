import React, { Component } from "react";
import Error from "../alerts-error/alerts-error";

const withDataDetails = (Vewi, getData, getImgUrl, Details) => {
	return class extends Component {
		state = {
			item: [],
			imgUrl: [],
			error: false,
		};

		// useEffect(() updateIteme();
		//    ,[this.props.itemId,getData,getImgUrl])

		componentDidUpdate(prevProps) {
			if (this.props.itemId !== prevProps.itemId) {
				return this.updateIteme();
			}
		}

		componentDidMount() {
			this.updateIteme();
		}
		updateIteme() {
			if (!this.props.itemId) {
				return;
			}

			if (this.state.error) {
				return <Error />;
			}

			getData(this.props.itemId)
				.then((item) => {
					const imgUrl = getImgUrl(item);

					this.setState({
						item,
						imgUrl,
					});
				})
				.catch(() => {
					this.setState({
						error: true,
					});
				});
		}
		render() {
			const { item, imgUrl } = this.state;

			return (
				<Vewi item={item} imgUrl={imgUrl}>
					<Details data={item} />
				</Vewi>
			);
		}
	};
};

export default withDataDetails;
