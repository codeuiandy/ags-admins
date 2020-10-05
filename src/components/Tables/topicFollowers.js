import React, { Component } from "react";
import Profolepic from './profilePic.jpg'
import Table from "./customTable";
import { Link } from "react-router-dom";

export default class topicFollowers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		

	
		const body = this.props.getGroupMembers.map((data, index) => ({
			groupname: <Link to={`/user_info/${data.id}`}>{`${data.first_name} ${data.last_name} `}</Link>,
			joinOn: data.joinOn,
       userImage:  <img className="userProfilePic" src={data.photo} />,
			admin:
			<select
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>,
			posts: data.posts ,
			location: data.location,
			action: (
				<a>

<Link to={`/user_info/${data.id}`} >
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
					
						className="fas fa-ban mr-4 add-cursor"
					></span>



				</a>)
		
		}));
		return body;
	};

	header = () => {
		const header = [

			{ title: "User Image", prop: "userImage" ,
		},
		
			{
				title: "Name (filterable)",
				prop: "groupname",
				sortable: true,
				filterable: true,
            },
            
           
            
			{ title: "Joined On", prop: "joinOn" ,
			sortable: true,
			filterable: true,},

			{ title: "Role", prop: "admin" ,
			},

			{ title: "Posts", prop: "posts" ,
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
					rowsPerPage={5}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}
}
