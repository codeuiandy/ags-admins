import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class previousEvents extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [
			{
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
				
			},
			{
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
			},
			{
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
			},
			{
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
			},
			{
				name: "Ted Talk",
				Date:"20/10/2020",
				Location: "Lagos/Nigeria",
			},
		];
		const body = datas.map((data, index) => ({
			name: data.name,
			Date: data.Date,
			Location: data.Location,
		

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
				title: "Event Name",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			{ title: "Event Date", prop: "Date" },

			{ title: "Locaton", prop: "Location" },

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
					rowsPerPage={3}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
