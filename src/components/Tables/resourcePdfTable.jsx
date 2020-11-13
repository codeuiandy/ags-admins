import React, { Component } from "react";
import Profolepic from '../Tables/profilePic.jpg'
import Table from "../Tables/customTable";
import { Link } from "react-router-dom";
import { data } from "jquery";

export default class allPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		console.log(this.props)
	}

	bodyRow = () => {

	
		const body = this.props.courses.map((data, index) => ({
            cover_image: <img className="userProfilePic" src={data.cover_image} />,
            title:data.title,
            category:data.category,
            description:data.description,
            longDescription:data.longDescription,
            file:data.file,
			action: (
				<a>


						{" "}
						<span
							style={{fontSize:"14px"}}
							className="edit"
							type="button"
						data-toggle="modal" 
						data-target="#PDFModal"
							className="fas fa-edit mr-4 add-cursor"
							onClick={() => this.props.getModalEditData(data)} 
						></span>
		

				
                          
					<span
					style={{fontSize:"14px"}}
					type="button"
					data-toggle="modal" 
					data-target="#ComfirmModal"
						onClick={() => this.props.getDeletId(data.id)} 
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
				prop: "cover_image",
				sortable: true,
				filterable: true,
			},
			

            { title: "Title", prop: "title" ,
            sortable: true,
			filterable: true,
			},

			{ title: "Category", prop: "category" ,
            },

            { title: "Description", prop: "description" ,
        },
            
            { title: "PDF File", prop: "file" ,
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
