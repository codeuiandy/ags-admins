import React, { useState } from "react";
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import Table from "./customTable";
import { Link } from "react-router-dom";


export const GroupTable =(props)=> {
	
let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)

const removeId = (id) =>{
    alert('Removing');
}
const addId = () => {
    alert('Adding');
}

const	bodyRow = () => {
		const body = props.getGroup === null ? [] : props.getGroup.map((data, index) => {
            return({
                check:<input type="checkbox" checked={props.selectedGroups.includes(data.id) ? true : false} onClick={()=>props.selectedGroups.includes(data.id) ? props.removeGroup(data.id) : props.addGroup(data.id)}/>,
                title:<Link to={`view_group/${data.id}`}>{data.name}</Link>,
                Members:data.members_count,
                closed:data.closed === true ?"Closed Group": "Open Group",
                description:data.description === null || data.description === undefined || data.description == "" ? "No description added": data.description,

            })
        });
		return body;
	};

const	header = () => {
		const header = [

            { title: "Check", prop: "check" ,
            },
            
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
			



	{
		title: "Open/Close (filterable)",
		prop: "closed",
		sortable: true,
		filterable: true,
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

