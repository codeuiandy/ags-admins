import React, { Component } from "react";
import Profolepic from '../Tables/profilePic.jpg'
import Table from "../Tables/customTable";
import { Link } from "react-router-dom";
import { data } from "jquery";
import truncateWithEllipses from '../helpers/truncate'
import DateFormater from '../helpers/dateFormater'
export default class Offers extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const body = this.props.afinityNetwork.map((data, index) => ({
            HeaderImage: <img className="userProfilePic" src={data.header_image} />,
            LogoImage:<img className="userProfilePic" src={data.logo_image} />,
            name:data.partner.name,
            how_to_redeem:data.how_to_redeem,
            how_it_works:data.how_it_works,
            long_description:data.long_description,
            offer_valid_description:data.offer_valid_description,
            short_description:data.short_description,
            tos:data.tos,
            status :data.status,
            expires:DateFormater(data.discount_expire),
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

            { title: "Logo image", prop: "LogoImage" ,
            },
            
            { title: "Header image", prop: "HeaderImage" ,
			},
		
            { title: "Partner name", prop: "name" ,
            prop: "name",
				sortable: true,
				filterable: true,
			},


            { title: "Terms and Conditions", prop: "tos" ,
            },


             { title: "Long description", prop: "long_description" ,
            },
            

             { title: "Offer valid description", prop: "offer_valid_description" ,
            },
            

             { title: "Short description", prop: "short_description" ,
            },
            
            
            { title: "Status", prop: "status" ,
			},

			{ title: "Discount expires", prop: "expires" ,
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
