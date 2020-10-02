
import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		datasets: [
			{
				label: " No. of weekly reported posts",

				data: [50, 10, 30, 40, 5, 90 ,100 ],
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

class reportedWeekly extends React.Component {
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

export default reportedWeekly;
