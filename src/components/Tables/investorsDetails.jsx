import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from '../Users/avatar.png'
import moment from 'moment'
export default class realEstate extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.realEstateData.map((data, index) => ({
		
			investor: <Link to={`user_info/${data.id}`}>{data.investor}  </Link>,
			amount:  _.startCase(_.lowerCase(`${data.amount}`)),
			reference:data.reference,
      units:data.units,
      investmentDate:data.investmentDate,
      maturity:data.maturity,

			action: (
				<a>


						{" "}
						<Link to={`view_investment/${data.id}`}>
						<i
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-eye mr-4 add-cursor"
						></i>
						</Link>

            <Link to={`user_info/${data.id}`}>
						<i
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-pen mr-4 add-cursor"
						></i>
						</Link>
						
            

                          
					<i
					style={{fontSize:"14px"}}
						className="fa fa-trash mr-4 add-cursor"
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
				title: "investor",
				prop: "investor",
				sortable: true,
				filterable: true,
      },
	
			{ title: "Amount", prop: "amount", sortable: true },


      { title: "reference", prop: "reference", sortable: true },
      
      { title: "Units", prop: "units", sortable: true },

      { title: "Investment Date", prop: "investmentDate", sortable: true },

			{ title: "Maturity", prop: "maturity", sortable: true },
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
