import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from '../Users/avatar.png'
import moment from 'moment'
export default class allUsers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.allUsers.map((data, index) => ({
			avatar:<img className="userProfilePic" src={data.photo === null ? avatar:data.photo} />,
			name: <Link to={`users/${data.id}`}>{data.first_name}  {data.last_name}</Link>,
			email:  _.startCase(_.lowerCase(`${data.email}`)),

			subscriptionStatus: data.is_active===true?"Active" : "Inactive",
			registrationDate: _.startCase(_.lowerCase(`${moment(data.registrationDate).format("DD/MM/YYYY")}`)),
			recentActivity:  _.startCase(_.lowerCase(`${moment(data.registrationDate).format("DD/MM/YYYY")}`)),

			action: (
				<a>


						{" "}
						<Link to={`user_info/${data.id}`}>
						<i
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></i>
						</Link>
						
				

                          
					<i
					style={{fontSize:"14px"}}
						className="fas fa-ban mr-4 add-cursor"
						type="button" data-toggle="modal" data-target="#blockUser"
						onClick={()=>this.props.getUserId(data.id)}
					></i>

				



				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Avater",
				prop: "avatar",
				sortable: true,
				filterable: true,
			},
			{
				title: "Full Name (filterable)",
				prop: "name",
				sortable: true,
				filterable: true,
			},
			{ title: "Email", prop: "email", sortable: true },

			{ title: "Status (filterable)", prop: "subscriptionStatus", sortable: true,	filterable: true, },

			{ title: "Registration Date", prop: "registrationDate", sortable: true },

			{ title: "Recent Activity", prop: "recentActivity", sortable: true },
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
