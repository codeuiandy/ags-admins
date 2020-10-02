import React, { Component } from "react";
import Profolepic from '../profilePic.jpg'
import Table from "../customTable";
import { Link } from "react-router-dom";

export default class askAQuestion extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				postTofeedIMG: <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},

			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},

			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},	{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},	{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},	{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},
			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},
			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},
			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},
			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata:"A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},
			{
				postTofeedIMG:  <img className="userProfilePic" src={Profolepic} />,
				Createdby: "Nwachukwu Davis",
				postdata: "A live webinar with our guest Omolara Yeku on strategies to transition .",
				postsDate: "12/2/2020",
			
			},

	

			
		];
		const body = datas.map((data, index) => ({
			postTofeedIMG: data.postTofeedIMG,
			Createdby: data.Createdby,

			postdata: data.postdata,
			postsDate: data.postsDate,
			location: data.location,
			action: (
				<a>

<Link to="/view_group" >
						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-edit mr-4 add-cursor"
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
		
			{ title: "Created By (filterable)", prop: "Createdby" ,
			sortable: true,
			filterable: true,},

			{ title: "Questions", prop: "postdata" ,
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
