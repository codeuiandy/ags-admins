

import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["January", "February", "March", "April", "May", "June", "July",
        'Aug',"Sep","Oct","Nov","Dec"],
		datasets: [
			{
				label: "No. of reported post monthly",

				data: [65, 59, 10, 81, 56, 80, 20, 40],
				fill: false,
				backgroundColor: " #EA4335",
				borderColor: " #EA4335",
				pointStyle: "rectRounded",
			}
		],
	};
}

const options = {
	responsive: true,
};

class reportedPosts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: chartData(),
		};
	}

	render() {
		return (
			<div className="responsiveChart">
				{" "}
				<LineChart data={this.state.data} />
			</div>
		);
	}
}

export default reportedPosts;
