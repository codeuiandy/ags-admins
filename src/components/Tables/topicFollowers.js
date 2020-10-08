import React, { Component } from "react";
import Profolepic from './profilePic.jpg'
import Table from "./customTable";
import { Link } from "react-router-dom";
import avatar from '../Users/avatar.png'
import DateFormater from '../helpers/dateFormater'
export default class topicFollowers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}bodyRow = () => {
		
		const body = this.props.getGroupMembers.map((data, index) => ({
		
			groupname: <Link to={`/user_info/${data.user.id}`}>{`${data.user.first_name} ${data.user.last_name} `}</Link>,
			joinOn: DateFormater(data.date_joined),
       userImage:  <img className="userProfilePic" src={data.user.photo === null ? avatar : data.user.photo} /> ,
			admin:data.is_admin === true ?
			<select
			value="hh"
			onChange={(e)=>this.props.upgradeUserRole(data.user.id,e.target.value)}
				class="form-control adminSelect" id="">
			
					<option value="select" >Admin</option>
				   <option value="remove">Remove as an admin</option>
				
				</select>:
					<select
					value="hh"
					onChange={(e)=>this.props.upgradeUserRole(data.user.id,e.target.value)}
						class="form-control adminSelect" id="">
					
							<option value="select" >Member</option>
							 <option value="add">Make Admin</option>
						
						</select>
				,
			posts: data.number_of_post,
			location: data.location,
			action: (
				<a>

<Link to={`/user_info/${data.user.id}`} >
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
					
						className="fa fa-trash mr-4 add-cursor"
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
