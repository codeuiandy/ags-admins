import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from '../Users/avatar.png'
import moment from 'moment'
import Truncate from '../helpers/truncate'
export default class Fellowship extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
        console.log(this.props.jobs)
		const body = this.props.fellowships.fellowships.map((data, index) => ({
		
			title: <Link to={`view_investment/${data.id}`}>{data.title}  </Link>,
			description:  _.startCase(_.lowerCase(`${Truncate(data.summary,100)}`)),
            status:  data.status,
			endDate:  data.end_date,

			action: (
				<a>


						{" "}
						<Link to={`/add_others/fellowship/edit/${data.id}`}>
						<i
						style={{fontSize:"14px"}}
							className="fas fa-pen mr-4 add-cursor"
						></i>
						</Link>


					
						
            

                          
					<i
					style={{fontSize:"14px"}}
						className="fa fa-trash mr-4 add-cursor"
						type="button" data-toggle="modal" data-target="#ComfirmModal"
						onClick={()=>this.props.getDeletId(data.id,"scholarships")}
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
	
			{ title: "Summary", prop: "description", sortable: true },
             { title: "End Date", prop: "endDate", sortable: true },
            { title: "status", prop: "status", sortable: true },
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
