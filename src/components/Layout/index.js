import React, { Component } from "react";
import {Navbar} from "./Navbar";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion"
export default class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			SidebarDefault: "SidebarDefault",
			sidebarShow: "",
			showBar: false,
		};
		console.log(this.props)
	}
	toggleSideBar = () => {
		let showBar = this.state.showBar;
		if (this.state.showBar === false) {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "showSidebar",
				showBar: !showBar,
			});
		} else {
			this.setState({
				SidebarDefault: "",
				sidebarShow: "hideSidebar",
				showBar: !showBar,
			});
		}
	};

	
	render() {
		let { SidebarDefault, sidebarShow } = this.state;
		return (
			<div>
				<div>
					<Navbar handleSideBar={this.toggleSideBar} />
					<Sidebar RouteUserLayout={this.props.RouteUserLayout} activepage={this.props.activepage} page={this.props.page} sidebarShow={sidebarShow} SidebarDefault={SidebarDefault} />
					<div className="centra-margin">
						<div style={{cursor:"pointer",width:"100px",fontSize:"21px",color:"#334D6E"}} onClick={()=>{this.props.RouteUserLayout.goBack()}}><i class="fas fa-arrow-left"></i></div>
	                {this.props.children}
					
					
						</div>
				</div>
			</div>
		);
	}
}
