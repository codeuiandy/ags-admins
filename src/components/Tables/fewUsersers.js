import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class fewUsersers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.fewUsers.map((data, index) => ({
			name: _.startCase(_.lowerCase(data.name)),
			email:  _.startCase(_.lowerCase(`${data.email}`)),

			joined: _.startCase(_.lowerCase(`${data.joined}`)),
			registrationDate: _.startCase(_.lowerCase(`${data.registrationDate}`)),
			recentActivity:  _.startCase(_.lowerCase(`${data.recentActivity}`)),

			// action: (
			// 	<a>
			// 		<Link to={`edit-payroll/${data.id}`}>
			// 			{" "}
			// 			<span
			// 				className="edit"
			// 				className="fa fa-pencil-square-o mr-4 add-cursor"
			// 			></span>
			// 		</Link>

			// 		<span
			// 			className="del"
			// 			onClick={() => this.props.deletePayroll(data.id)}
			// 			className="fa fa-trash mr-4 add-cursor"
			// 		></span>
			// 	</a>
			// ),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Item Name (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			{ title: "Email", prop: "email", sortable: true },

			{ title: "Joined/Gifted", prop: "joined", sortable: true },

			{ title: "Registration Date", prop: "registrationDate", sortable: true },

			{ title: "Recent Activity", prop: "recentActivity", sortable: true },
			// { title: "Actions", prop: "action" },
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsive" style={{ overflow: "hidden" }}>
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
