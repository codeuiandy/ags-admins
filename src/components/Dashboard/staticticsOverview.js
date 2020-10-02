import React, { Component } from "react";

export default class staticticsOverview extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="staticticsOverView">
					<div>
						<h1>302</h1>
						<h2>New Users</h2>
					</div>

					<div>
						<h1>32</h1>
						<h2>REPORTED USERS</h2>
					</div>

					<div>
						<h1>302</h1>
						<h2>AFFILIATE MEMBERS</h2>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
