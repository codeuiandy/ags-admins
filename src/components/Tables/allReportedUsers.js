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
			avatar:<img className="userProfilePic" src={data.user.photo === null ? avatar:data.user.photo} />,
			name: <Link to={`user_info/${data.user.id}`}>{data.user.first_name}  {data.user.last_name}</Link>,
			email:  _.startCase(_.lowerCase(`${data.user.email}`)),

			reportedfor: data.is_active===true?"Active" : "Inactive",
			reportedon: _.startCase(_.lowerCase(`${moment(data.created_at).format("DD/MM/YYYY")}`)),
			recentActivity:  _.startCase(_.lowerCase(`${moment(data.reportedon).format("DD/MM/YYYY")}`)),

			action: (
				<a>


						{" "}
						<Link to={`user_info/${data.user.id}`}>
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

			{ title: "Reported on", prop: "reportedon", sortable: true,	filterable: true, },

			{ title: "Reported for", prop: " reportedfor ", sortable: true },

			{ title: "Reported by", prop: "reportedby", sortable: true },
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
