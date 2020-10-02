import React, { Component } from "react";
import Profolepic from './profilePic.jpg'
import Table from "./customTable";
import { Link } from "react-router-dom";

export default class grpMembers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},

			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},

			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},	{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},	{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div>  ,
				posts: "81",
			
			},	{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},
			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div>  ,
				posts: "81",
			
			},
			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div>  ,
				posts: "81",
			
			},
			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},
			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div> ,
				posts: "81",
			
			},
			{
                groupname: <Link to="/user_info">Okeke Mandela</Link>,
                userImage:<img className="userProfilePic" src={Profolepic} />,
				joinOn: "21/12/2020",
				admin:  <div class="form-group">
				<select
			// value={}
		// 	name="eventFee"
		//   onChange={}
				class="form-control adminSelect" id="exampleFormControlSelect1">
					<option value="freeEvent">Member</option>
				   <option value="paidEvent">Make Admin</option>
				  
				</select>
			  </div>  ,
				posts: "81",
			
			},

		{	action: (
				<a>

<Link >
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



				</a>)}

			
		];
		const body = datas.map((data, index) => ({
			groupname: data.groupname,
			joinOn: data.joinOn,
            userImage:data.userImage,
			admin: data.admin,
			posts: data.posts,
			location: data.location,
			action: (
				<a>

<Link to="/view_group" >
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
