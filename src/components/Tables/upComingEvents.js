import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class upComingEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [
			{
				type:"internal",
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				Description:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				EventStartTime:"6pm",
				EventEndTime:"8pm",
				PaidEvent:"True"
			},
			{	type:"internal",
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				Description:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				EventStartTime:"6pm",
				EventEndTime:"8pm",
				PaidEvent:"True"
			},
			{
				type:"internal",
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				Description:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				EventStartTime:"6pm",
				EventEndTime:"8pm",
				PaidEvent:"True"
			},
			{	type:"internal",
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				Description:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				EventStartTime:"6pm",
				EventEndTime:"8pm",
				PaidEvent:"True"
			},
			{	type:"internal",
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				Description:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				EventStartTime:"6pm",
				EventEndTime:"8pm",
				PaidEvent:"True"
			},
		];
		const body = datas.map((data, index) => ({
			type:data.type,
			name: data.name,
			Date: data.Date,
			Location: data.Location,
			Description:data.Description,
			EventStartTime:data.EventStartTime,
			EventEndTime:data.EventEndTime,
			PaidEvent:data.PaidEvent,
			action: (
				<a>
					<Link to="/view_event">
						{" "}
						<span
							className="edit"
							style={{ color: " #0D0D0D", fontSize: "14px" }}
							// onClick={() => this.props.handleEdit(data.id)}
							// data-backdrop="static"
							className="fa fa-eye mr-4 add-cursor"
						></span>
					</Link>

					<Link to="">
						{" "}
						<span
							className="edit"
							style={{ color: " #0D0D0D", fontSize: "14px" }}
							// onClick={() => this.props.handleEdit(data.id)}
							// data-backdrop="static"
							className="fa fa-eraser mr-4 add-cursor"
						></span>
					</Link>
				


					<span
						style={{ color: " #F00A0A", fontSize: "14px",cursor:"pointer" }}
					
						// onClick={() => this.props.handleDelete(data.id)}
						className="fa fa-trash mr-4 add-cursor"
						data-toggle="modal" data-target="#ComfirmModal"
					></span>
				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [

			{
				title: "Event Type",
				prop: "type",
				sortable: true,
				filterable: true,
			},

			{
				title: "Event Name",
				prop: "name",
				sortable: true,
				filterable: true,
			},

			{ title: "Description", prop: "Description" },

			{ title: "Event Date", prop: "Date" },

			{ title: "Locaton", prop: "Location" },

			{ title: "Paid Event", prop: "PaidEvent" },

			{ title: "Event Start Time", prop: "EventStartTime" },

			{ title: "Event End Time", prop: "EventEndTime" },
			{ title: "Actions", prop: "action" },


		];
		return header;
	};

	render() {
		return (
			<div className="table-responsivee">
				<Table
					body={this.bodyRow}
					head={this.header}
					rowsPerPage={10}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
