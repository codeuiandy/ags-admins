import React, { useState } from "react";
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import Table from "./customTable";
import { Link } from "react-router-dom";


export const GroupTable =(props)=> {
	
let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)




const	bodyRow = () => {
		
		const body = props.getGroup === null ? [] : props.getGroup.map((data, index) => (console.log("data...",data),{
			title:data.name,
			Members:data.members_count,
			closed:data.closed === true ?"Closed Group": "Open Group",
			description:data.description === null || data.description === undefined || data.description == "" ? "No description added": data.description,
			action: (
				<a>

<Link to="/create_group_edit_group" >
						{" "}
						<span
						
						onClick={()=>setDeletDetails({edit_id:data.id,edit_data:data,usedbyGroupsPage:true})}
						style={{fontSize:"14px"}}
							className="edit"
							className="fas fa-pen mr-4 add-cursor"
						></span>
					</Link>

				
                          
					<span
						onClick={()=>setDeletDetails({...getDeletDetails,delete_id:data.id,delete_url:"groups"})}
					type="button" 
					 data-toggle="modal"
					  data-target="#deleteModal"
					style={{fontSize:"14px"}}
						className="fa fa-trash mr-4 add-cursor"
					></span>



				</a>)
		}));
		return body;
	};

const	header = () => {
		const header = [
			{
				title: "Title (filterable)",
				prop: "title",
				sortable: true,
				filterable: true,
			},
		

			

			{ title: "Description", prop: "description" ,
			},

			{ title: "Members", prop: "Members" ,
		},
			

		{ title: "Open/Close", prop: "closed" ,
	},
			
			{ title: "Action", prop: "action" ,
		},
		
		];
		return header;
	};


	
		return (
			<div className="table-responsivee">
				<Table
					body={bodyRow}
					head={header}
					rowsPerPage={10}
					rowsPerPageOption={[10, 15, 20, 25]}
				/>
			</div>
		);
	}

