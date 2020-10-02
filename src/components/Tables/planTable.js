import React, { Component } from "react";

import Table from "./customTable";
import { Link } from "react-router-dom";

export default class planTable extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	bodyRow = () => {
		const datas = [

			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},

			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},

			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},	{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},	{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},	{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "Cornwall Hippos",
				planType:"Titan"
			},

			,
			{
				Name: "Adedayo Manfo",
				decription: "lorem la vale is the the  best manusavat of a united",
				interval:<a style={{color:"#FDAD00",fontWeight:"400"}}>Monthly</a>,
				Amount: "500,00",
			    planType:"Titan"
			},

			
		];
		const body = datas.map((data, index) => ({
			Name: data.Name,
			decription: data.decription,

			interval: data.interval,
			Amount: data.Amount,
			planType: data.planType,

		
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
			{ title: "Description", prop: "decription" ,
			sortable: true,
			filterable: true,},

			{ title: "Interval", prop: "interval" ,
			},

			{ title: "Amount", prop: "Amount" ,
			},

			{ title: "Plan Type", prop: "planType" ,
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
