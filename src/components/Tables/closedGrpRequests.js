import React, { Component } from "react";
import Profolepic from './profilePic.jpg'
import Table from "./customTable";
import { Link } from "react-router-dom";

export default class closedGrpRequests extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				Name: "Femi Tijani",
                requestedOn: "21/5/2020",
                UserImage:<img className="userProfilePic" src={Profolepic} />,
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},

			{
                Name: "Okekek Andy",
                UserImage:<img className="userProfilePic" src={Profolepic} />,
				requestedOn: "21/5/2020",
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},

			{
				Name: "Adebayo joe",
				requestedOn: "21/5/2020",
				   UserImage:<img className="userProfilePic" src={Profolepic} />,
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},	{
				Name: "john down",
				requestedOn: "21/5/2020",
				   UserImage:<img className="userProfilePic" src={Profolepic} />,
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},	{
				Name: "john down",
				requestedOn: "21/5/2020",
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
                UserImage:<img className="userProfilePic" src={Profolepic} />,
			},	{
				Name: "john down",
				requestedOn: "21/5/2020",
				   UserImage:<img className="userProfilePic" src={Profolepic} />,
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},
			{
				Name: "john down",
				requestedOn: "21/5/2020",
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
                UserImage:<img className="userProfilePic" src={Profolepic} />,
			},
			{
				Name: "john down",
				requestedOn: "21/5/2020",
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
                UserImage:<img className="userProfilePic" src={Profolepic} />,
			},
			{
				Name: "john down",
				requestedOn: "21/5/2020",
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
                UserImage:<img className="userProfilePic" src={Profolepic} />,
			},
			{
				Name: "john down",
				requestedOn: "21/5/2020",
                UserImage:<img className="userProfilePic" src={Profolepic} />,
				Actions: <div className="">
               
                <button className="approveClosedGrp">Approve </button>
                <button className="rejectClosedGrp">Reject </button>
            </div>,
			
			},
			{
				Name: "john down",
				requestedOn: "21/5/2020",
				Actions: <div>
                    <button>Approve </button>
                </div>,
			
			},

			
		];
		const body = datas.map((data, index) => ({
			Name: data.Name,
			requestedOn: data.requestedOn,

			UserImage:data.UserImage,
			Actions: data.Actions,
			location: data.location,

		
		}));
		return body;
	};

	header = () => {
		const header = [
			{
				title: "Name (filterable)",
				prop: "Name",
				sortable: true,
				filterable: true,
			},
			

			{ title: "User Image", prop: "UserImage" ,
            },
            
            { title: "Request Sent On", prop: "requestedOn" ,
			sortable: true,
			filterable: true,},

			{ title: "Actions", prop: "Actions" ,
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
