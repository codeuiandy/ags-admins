
import React from "react";
import { Line as LineChart } from "react-chartjs-2";

function chartData() {
	return {
		labels: ["January", "February", "March", "April", "May", "June", "July",
	'Aug',"Sep","Oct","Nov","Dec"],
		datasets: [
			{
				label: " No. of new posts ",

				data: [65, 59, 60, 81, 56, 40, 90, 100],
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

class newPostGraph extends React.Component {
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

export default newPostGraph;
