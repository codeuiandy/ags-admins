

import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["January", "February", "March", "April", "May", "June", "July"],
		datasets: [
			{
				label: "New Users",

				data: [65, 59, 80, 81, 56, 80, 90, 100],
				fill: false,
				backgroundColor: "#1E9682",
				borderColor: "#FDAD00",
				pointStyle: "rectRounded",
			},
			{
				label: "Reported Users",

				fill: false,
				color: ["#1E9682"],
				borderColor: "#D93025",
				data: [8, 28, 40, 19, 6, 27, 40],
			},

			{
				label: " Affiliate Members ",

				fill: false,
				color: ["#1E9682"],
				borderColor: "#4267B2",
				data: [30, 46, 40, 15, 60, 67, 70],
			},
		],
	};
}

const options = {
	responsive: true,
};

class Statictics extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: chartData(),
		};
	}

	render() {
		return (
			<div className="">
				{" "}
				<LineChart data={this.state.data} />
			</div>
		);
	}
}

export default Statictics;
