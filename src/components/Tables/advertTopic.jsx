import React, { useState } from "react";
import {useRecoilState} from 'recoil'
import {delet_edit_Handle} from '../../GlobalState/localState'
import Table from "./customTable";
import { Link } from "react-router-dom";


export const TopicsTable =(props)=> {
	
let [getDeletDetails, setDeletDetails] = useRecoilState(delet_edit_Handle)




const	bodyRow = () => {
		
		const body = props.getTopic === null ? [] : props.getTopic.map((data, index) => ({
            check:<input type="checkbox" checked={props.selectedTopics.includes(data.id) ? true : false} onClick={()=>props.selectedTopics.includes(data.id)
            ? props.removeTopic(data.id) : props.addTopic(data.id)}/>,
			title:<Link to={`/view_topic/${data.id}`}>{data.title}</Link>,
			followers:data.followers.length,
			description:data.description === null || data.description === undefined || data.description == "" ? "No description added": data.description,
			
		}));
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

			{ title: "Followers", prop: "followers" ,
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

