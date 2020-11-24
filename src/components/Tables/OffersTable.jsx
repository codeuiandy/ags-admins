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
            // HeaderImage: <img className="userProfilePic" src={data.LogoImage} />,
            // LogoImage:<img className="userProfilePic" src={data.LogoImage} />,

//             discount_expire: "2020-11-27"
// discount_rate: "10"
// header_image: "https://stagging.agstribe.org/media/lab-3498584_640_MrNhsvb.jpg"
// how_to_redeem: "Contact us"
// id: "0fed8ad3-6fe7-4f67-8d91-b2f1360bc36e"
// logo_image: "https://stagging.agstribe.org/media/monkey-2500919_640_JFasB3w.jpg"
// partner: {id: "ae1a83a4-b25d-405d-b92f-d79134ae8ab2",…}
// status: "open"
// tos: "lorem"

            name:data.partner.name,
            how_to_redeem:data.how_to_redeem,
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
		
            { title: "Name", prop: "name" ,
            prop: "name",
				sortable: true,
				filterable: true,
			},

			{ title: "Contact person", prop: "how_to_redeem" ,
			}, 
			
            { title: "tos", prop: "tos" ,
            },

    
           
            
            { title: "Service", prop: "service_rendered" ,
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
