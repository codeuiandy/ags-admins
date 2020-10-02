import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class allReportedUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.allReportedUser.map((data, index) => ({
			name: _.startCase(_.lowerCase(data.name)),
			email:  _.startCase(_.lowerCase(`${data.email}`)),

			Reportedon: _.startCase(_.lowerCase(`${data.Reportedon}`)),
			reportedFor: _.startCase(_.lowerCase(`${data.reportedFor}`)),
			reportedBy:  _.startCase(_.lowerCase(`${data.reportedBy}`)),

			action: (
				<a>

<Link to={`edit-payroll/${data.id}`}>
						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></span>
					</Link>

				
                          
					<span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fas fa-ban mr-4 add-cursor"
					></span>

					<span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fa fa-trash mr-4 add-cursor"
					></span>



				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Name (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			{ title: "Email", prop: "email", sortable: true },

			{ title: "Reported on", prop: "Reportedon", sortable: true },

			{ title: "Reported for", prop: "reportedFor", sortable: true },

			{ title: "Reported by", prop: "reportedBy", sortable: true },
			{ title: "Actions", prop: "action" },
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsive" style={{ overflow: "hidden"}}>
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
