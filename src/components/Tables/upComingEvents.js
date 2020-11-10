import React, { Component } from "react";
import DateFormater from '../helpers/dateFormater'
import Table from "./customTable";
import { Link } from "react-router-dom";
import moment from 'moment'
import truncateWithEllipses from '../helpers/truncate'
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
			Description:truncateWithEllipses(data.description, 50),
			EventStartTime:moment(data.start_datetime).format("DD-MM-YYYY hh:mm"),
			EventEndTime:moment(data.end_datetime).format("DD-MM-YYYY hh:mm"),
			PaidEvent:data.free === false ? "True" : "false",

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

					<Link to={`/create_event/edit_event/${data.id}`}>
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
						type="button"
						data-toggle="modal" 
						data-target="#deleteEventModal"
						onClick={() => this.props.getDeletId(data.id)}
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
