import React, { Component } from "react";
import env from "./evn.jpg";

export default class recents extends Component {
	render() {
		return (
			<div>
				<div className="recents">
					<div className="introGrid1">Network Activity</div>
					<div className="innerUpdates recents1">
						<div className="recentMain">
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								sequi.
							</div>
							<span>12 hrs ago</span>
						</div>
						<div className="recentMain">
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								sequi.
							</div>
							<span>12 hrs ago</span>
						</div>{" "}
						<div className="recentMain">
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								sequi.
							</div>
							<span>12 hrs ago</span>
						</div>{" "}
						<div className="recentMain">
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								sequi.
							</div>
							<span>12 hrs ago</span>
						</div>{" "}
						<div className="recentMain">
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
								sequi.
							</div>
							<span>12 hrs ago</span>
						</div>{" "}
					</div>
					<div className="introGrid2">Popular Events</div>
					<div className="recents2">
						<div className="eventR">
							<img src={env} alt="" />
							<div className="about-event">
								<span>Ladies Night</span>
								<div>320 Members</div>
								<p className="eventDate">
									21/Jan/2023
								</p>
							</div>
						</div>
					</div>
					<div className="recents3">
						<div className="recentsE">
							<div className="eventR">
								<img src={env} alt="" />
								<div className="about-event">
									<span>Ladies Night</span>
									<div>320 Members</div>
									<p className="eventDate">
									21/Jan/2023
								</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
