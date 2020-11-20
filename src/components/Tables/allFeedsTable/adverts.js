import React, { Component } from "react";
import Profolepic from '../profilePic.jpg'
import Table from "../customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from '../../Tables/avatar.png'
import moment from 'moment'
export default class GroupTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log(props)
	}


	bodyRow = () => {
		console.log("props>>>>",this.props)

		const body = this.props.adverts.map((data, index) => ({
			// Createdby:<Link to={`user_info/${data.post.user.id}`}>{data.post.user.first_name}  {data.post.user.last_name}</Link>,
			postdata: data.body,
			postsDate: _.startCase(_.lowerCase(`${moment(data.created_at).format("DD/MM/YYYY")}`)),
			file: <img className="userProfilePic" src={data.image === null ? avatar:data.image} />,
			action: (
				<a>


						{" "}
						<Link
						to={`/create_advert/${data.id}/edit`}
					style={{fontSize:"14px"}}
						className="fas fa-pen mr-4 add-cursor"
						></Link>


				
                          
					<span
					style={{fontSize:"14px"}}
					type="button" 
					data-toggle="modal"
					 data-target="#ComfirmModal"
				  style={{fontSize:"14px"}}
					 className="fa fa-trash mr-4 add-cursor"
					 onClick={()=>this.props.getDeletId(data.id)}
					></span>



				</a>)
		
		}));
		return body;
	};

	header = () => {
		const header = [
	
			{ title: "Image", prop: "file" ,
		},

			{ title: "Adverts", prop: "postdata" ,
			},

		


			{ title: "Date Added", prop: "postsDate" ,
			},

			
			{ title: "Action", prop: "action" ,
		},
		
		];
		return header;
	};

	render() {
		return (
			<div className="table-responsivee">
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
