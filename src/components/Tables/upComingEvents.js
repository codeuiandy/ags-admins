import React, { Component } from "react";
import DateFormater from '../helpers/dateFormater'
import Table from "./customTable";
import { Link } from "react-router-dom";
import moment from 'moment'
export default class upComingEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
	
		const body = this.props.activeEvents.map((data, index) => ({
			type:data.event_type,
			name: data.title,
			Date: data.city,
			Location: data.address,
			Description:data.description,
			EventStartTime:moment(data.start_datetime).format("DD-MM-YYYY hh:mm"),
			EventEndTime:moment(data.end_datetime).format("DD-MM-YYYY hh:mm"),
			PaidEvent:data.free === false ? "True" : "false",


			// address: "19 omilani"
			// banner: "/media/apple-5523590_640.jpg"
			// city: "Lagos"
			// created_at: "2020-11-05T12:34:40.706926Z"
			// cta_button: ""
			// description: "lorem"
			// end_datetime: "2020-11-28T02:00:00.000000Z"
			// event_type: "internal"
			// free: false
			// id: 11
			// is_flagship: false
			// liked: []
			// link: "https://searchcode.com/codesearch/raw/14390155/"
			// location: null
			// medium: "hybrid"
			// modified_at: "2020-11-05T12:34:40.706941Z"
			// price: "2000.00"
			// registration_link: ""
			// seats: 44
			// start_datetime: "2020-11-20T01:15:00.000000Z"
			// status: null
			// title: "Party Event"
			action: (
				<a>
					<Link to={`/view_event/${data.id}`}>
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


			{ title: "Locaton", prop: "Location" },

			{ title: "City", prop: "Date" },

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
