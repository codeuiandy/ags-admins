import React, { Component } from "react";
import Profolepic from './profilePic.jpg'
import Table from "./customTable";
import { Link } from "react-router-dom";
import _ from 'lodash';
import avatar from './avatar.png'
import moment from 'moment'
export default class GroupTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log(props)
	}


	bodyRow = () => {

		const body = this.props.Icebreaker.map((data, index) => ({
			Createdby:<Link to={`user_info/${data.user.id}`}>{data.user.first_name}  {data.user.last_name}</Link>,
			postdata: data.post === null ? "False" : data.post.body  ,
			commentData: data.comment === null ? "False" : data.comment.body  ,
			postsDate: _.startCase(_.lowerCase(`${moment(data.created_at).format("DD-MM-YYYY")}`)),
			// file: <img className="userProfilePic" src={data.post.file === null ? avatar:data.post.file} />,
			action: (
				<a>



				
                      

{
						data.post === null ?"":<span>Block Post</span>
					}

					{
						data.comment === null ?"":<span>Block Comment</span>
					}



				</a>)
		
		}));
		return body;
	};

	header = () => {
		const header = [
		
			{ title: "Created By (filterable)", prop: "Createdby" ,
			sortable: true,
			filterable: true,},

			{ title: "Image", prop: "file" ,
		},

			{ title: "Reported Posts", prop: "postdata" ,
			},

		
			{ title: "Reported Comments", prop: "commentData" ,
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
