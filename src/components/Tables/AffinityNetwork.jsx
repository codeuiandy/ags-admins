import React, { Component } from "react";
import Profolepic from '../Tables/profilePic.jpg'
import Table from "../Tables/customTable";
import { Link } from "react-router-dom";
import { data } from "jquery";
import truncateWithEllipses from '../helpers/truncate'
export default class allPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.afinityNetwork.map((data, index) => ({
            // HeaderImage: <img className="userProfilePic" src={data.LogoImage} />,
            // LogoImage:<img className="userProfilePic" src={data.LogoImage} />,
            name:data.name,
            contactPerson:data.contact_person,
            description:data.description === null ? "" : truncateWithEllipses(data.description, 50),
            industry:data.industry,
            serviceRendered:data.service_rendered === null ? truncateWithEllipses(data.service_rendered,50) : "",
			phone :data.phone,
			website:data.website === null ? "" : truncateWithEllipses(data.website,50),
			action: (
				<a>


						{" "}
						<span
						style={{fontSize:"14px"}}
							className="edit"
							type="button"
						data-toggle="modal" 
						data-target="#addOffereModal"
							className="fas fa-edit mr-4 add-cursor"
							onClick={() => this.props.getModalEditData(data)} 
						></span>
		

				
                          
					<span
						type="button"
						data-toggle="modal" 
						data-target="#ComfirmModal"
						onClick={() => this.props.getDeletId(data.id)}
						className="fa fa-trash mr-4 add-cursor"
						data-toggle="modal" data-target="#ComfirmModal"
					></span>



				</a>)
		
		}));
		return body;
	};

	header = () => {
		const header = [
		
            { title: "Name", prop: "name" ,
            prop: "name",
				sortable: true,
				filterable: true,
			},

			{ title: "Contact person", prop: "contactPerson" ,
			}, 
			
            { title: "Industry", prop: "industry" ,
            },

            { title: "Description", prop: "description" ,
        },
           
            
            { title: "Service", prop: "serviceRendered" ,
            },
            
            { title: "Company phone number", prop: "phone" ,
			},

			{ title: "Company website", prop: "website" ,
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
