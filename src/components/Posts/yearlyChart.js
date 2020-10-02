
import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["January", "February", "March", "April", "May", "June", "July",
        'Aug',"Sep","Oct","Nov","Dec"],
		datasets: [
			{
				label: "Yearly Chart",

				data: [50, 10, 30, 40, 5, 90 ,100 ],
				fill: false,
				backgroundColor: "#FDAD00",
				borderColor: "#FDAD00",
				pointStyle: "rectRounded",
			}
		],
	};
}

const options = {
	responsive: true,
};

class yearlyChart extends React.Component {
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

export default yearlyChart;
