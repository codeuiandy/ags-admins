import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from '../Users/avatar.png'
import moment from 'moment'
export default class agricuture extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.realEstateData.map((data, index) => ({
		
			title: <Link to={`user_info/${data.id}`}>{data.title}  </Link>,
			Partner:  _.startCase(_.lowerCase(`${data.partner}`)),
			ROI:data.rio,
			Maturity:  data.maturity,

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
				title: "Title",
				prop: "title",
				sortable: true,
				filterable: true,
			},
	
			{ title: "Partner", prop: "Partner", sortable: true },


			{ title: "ROI", prop: "ROI", sortable: true },

			{ title: "Maturity", prop: "Maturity", sortable: true },
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
