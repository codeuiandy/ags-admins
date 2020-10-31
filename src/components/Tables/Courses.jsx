import React, { Component } from "react";
import Profolepic from '../Tables/profilePic.jpg'
import Table from "../Tables/customTable";
import { Link } from "react-router-dom";
import { data } from "jquery";

export default class allPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
	
		const body = this.props.afinityNetwork.map((data, index) => ({
            HeaderImage: <img className="userProfilePic" src={data.LogoImage} />,
            LogoImage:<img className="userProfilePic" src={data.LogoImage} />,
            name:data.name,
            expiration:data.expiration,
            description:data.description,
            longDescription:data.longDescription,
            HowWorks:data.HowWorks,
            Termsconditions :data.Termsconditions,
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
			{
				title: "Cover Image",
				prop: "HeaderImage",
				sortable: true,
				filterable: true,
			},
			

            { title: "Name", prop: "name" ,
            sortable: true,
			filterable: true,
			},

			{ title: "Category", prop: "expiration" ,
            },

            { title: "Description", prop: "description" ,
        },
            
            { title: "Course Link", prop: "longDescription" ,
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
