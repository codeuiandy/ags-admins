import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import dateFormater from '../helpers/dateFormater'

export default class userComments extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.userPosts.map((data, index) => ({
			postType: _.startCase(_.lowerCase(data.content_type)),
			postBody:  _.startCase(_.lowerCase(`${data.body}`)),

			joined: dateFormater(data.created_at),
			registrationDate: _.startCase(_.lowerCase(`${data.registrationDate}`)),
			recentActivity:  _.startCase(_.lowerCase(`${data.recentActivity}`)),

			action: (
				<a>

{/* <Link to={`/view_topic/${data.id}`}>
						{" "}
					
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></span>
				
						
					</Link> */}

				
					
					
                          
					<span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.blockUserData(data.id,"comment")}
						className="fas fa-ban mr-4 add-cursor"
					></span>

					{/* <span
					style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fa fa-trash mr-4 add-cursor"
					></span> */}
	{/* <span
	style={{fontSize:"14px"}}
						className="del"
						onClick={() => this.props.deletePayroll(data.id)}
						className="fas fa-envelope-square mr-4 add-cursor"
					></span> */}


				</a>
			),
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Post Type (filterable)",
				prop: "postType",
				sortable: true,
				filterable: true,
			},
			{ title: "Comments body", prop: "postBody", sortable: true },

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
