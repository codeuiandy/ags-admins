import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';

export default class userPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.userPosts.map((data, index) => ({
			name: _.startCase(_.lowerCase(data.name)),
			email:  _.startCase(_.lowerCase(`${data.email}`)),

			joined: _.startCase(_.lowerCase(`${data.joined}`)),
			registrationDate: _.startCase(_.lowerCase(`${data.registrationDate}`)),
			recentActivity:  _.startCase(_.lowerCase(`${data.recentActivity}`)),

			action: (
				<a>

<Link to={`edit-payroll/${data.id}`}>
						{" "}
						<Link to='user_info'>
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></span>
						</Link>
						
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
	<span
	style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fas fa-envelope-square mr-4 add-cursor"
					></span>


				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Post Title (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			{ title: "Post body", prop: "email", sortable: true },

			{ title: "Date Added", prop: "joined", sortable: true },

			// { title: "Reported", prop: "recentActivity", sortable: true },
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
