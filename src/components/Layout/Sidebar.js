import React, { Component } from "react";
import "./layout.css";
import {Link } from 'react-router-dom'
import { Scrollbars } from 'react-custom-scrollbars';
export default class Sidebar extends Component {
	constructor(props){
		super(props)
		this.state={
			dropDownEvent:false,
			dropDownGroup:false,
			dropDownPosts:false,
			dropDownTopics:false,
			dropDownUsers:false,
			dropDownBoard:false,
			dropDownAffinity:false,

		}
		console.log(this.props)
		
		
	}
	dropDown=(events)=>{
		let dropDownEvent = this.state.dropDownEvent
		let dropDownGroup = this.state.dropDownGroup
if (events==="events") {
	this.setState({
		dropDownEvent:!dropDownEvent,
		dropDownGroup:false,
		dropDownPosts:false,
		dropDownTopics:false,
			dropDownUsers:false
	})	
}

if (events==="groups") {
	this.setState({
		dropDownGroup:!dropDownGroup,
		dropDownEvent:false,
		dropDownPosts:false,
		dropDownTopics:false,
		dropDownUsers:false
		
	})
}

if (events==="posts") {
	this.setState({
		dropDownPosts:!this.state.dropDownPosts,
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownTopics:false,
		dropDownUsers:false
		
	})	
}

if (events==="topics") {
	this.setState({
		dropDownTopics:!this.state.dropDownTopics,
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:false
		
	})	
}


if (events==="users") {
	this.setState({
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:!this.state.dropDownUsers
		
	})	
}

if (events==="board") {
	this.setState({
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:false,
		dropDownBoard:!this.state.dropDownBoard,
		
	})	
}

if (events==="Affinity") {
	this.setState({
		dropDownEvent:false,
		dropDownGroup:false,
		dropDownUsers:false,
		dropDownBoard:false,
		dropDownAffinity:!this.state.dropDownAffinity,
		
	})	
}




	}

	
	componentDidMount(){
		
		if (this.props.activepage === "keepOpenEvents") {
			this.setState({
dropDownEvent:true,
			})
			
		}

		if (this.props.activepage === "keepOpenGroup") {
			this.setState({
				dropDownGroup:true,
				
			})
			
		}

		if (this.props.activepage === "keepOpenPosts") {
			this.setState({
			
				dropDownPosts:true,
			
			})
			
		}

		if (this.props.activepage === "keepOpenTopics") {
			this.setState({
			
			
				dropDownTopics:true,
			})
			
		}


		if (this.props.activepage === "keepOpenUsers") {
			this.setState({
			
			
				dropDownUsers:true,
			})
			
		}

		if (this.props.activepage === "allUsers") {
			this.setState({
			
			
				dropDownUsers:true,
			})
			
		}
		
		
		if (this.props.activepage === "reportedUsers") {
			this.setState({
			
			
				dropDownUsers:true,
			})
			
			
		}

		if (this.props.activepage === "funding_opportunities"  
		|| this.props.activepage === "investment_opportunities"
		 || this.props.activepage === "other_opportunities" ) {
			this.setState({
			
			
				dropDownBoard:true,
			})
			
			
		}

		if (this.props.activepage === "affinity_network/offers"  
		|| this.props.activepage === "affinity_network/partners"
		 ) {
			this.setState({
			
			
				dropDownAffinity:true,
			})
			
			
		}
		
		
	}
	render() {
		
		
		return (
			<div>
				<div
					className={`${
						this.props.sidebarShow === "showSidebar"
							? "showSidebar"
							: "hideSidebar"
					} ${this.props.SidebarDefault}`}
				>
					<div className={`sidebar`}>
					<Scrollbars style={{ width: 224, height: "100vh "}}
					autoHide
					autoHideTimeout={1000}
					autoHideDuration={200}
					>
						<ul className="sidebarList">
						<div onClick={()=>{
									this.props.RouteUserLayout.push("/dashboard")
								}} className="hoverActiveRoute"></div>
							<li  className={`${this.props.page==="dashboard"?"activeClass":""}`}><i class="fas fa-th">
								
								</i>Dashboard</li>

								<div onClick={(e)=>this.dropDown('events')} className="hoverActiveRoute"></div>
							<li ><i class="far fa-calendar-alt"></i> Events</li>
							{this.state.dropDownEvent===true?
							
							<ul className="dropdownlist">
								

								<li className={`${this.props.page==="event_overview"?"activeClass":""}`}>

<div onClick={()=>{
	this.props.RouteUserLayout.push("/event_overview")
}} className="hoverActiveRoute"></div>

<Link className={`${this.props.page==="event_overview"?"activeClass":""}`} >
	 Event Overview</Link></li>




								
								<li className={`${this.props.page==="create_event"?"activeClass":""}`}>

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/create_event/create/none")
								}} className="hoverActiveRoute"></div>

								<Link className={`${this.props.page==="create-event"?"activeClass":""}`} to="/create_event">
									Create Event</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/event_list")
								}} className="hoverActiveRoute"></div>
								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="event-list"?"activeClass":""}`} to="/event_list">
									Event List</Link></li>
							</ul>
							:""}
<div onClick={(e)=>this.dropDown('groups')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-users"></i> Groups</li>
							{this.state.dropDownGroup===true?
							
							<ul className="dropdownlist">
								

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/groups")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="groups-overview"?"activeClass":""}`} >
									Group Overview</Link></li>

								<li className={`${this.props.page==="event-list"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_groups"?"activeClass":""}`} to="/all_groups">
									Groups</Link></li>

									
							</ul>
							:""}

<div onClick={(e)=>this.dropDown('posts')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-vote-yea"></i>Feed</li>
							{this.state.dropDownPosts===true?
							
							<ul className="dropdownlist">
								
								<div
								//  onClick={()=>{
								// 	this.props.RouteUserLayout.push("/posts-overview")
								// }} 
								className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="postOverview"?"activeClass":""}`}>
								<Link className={`${this.props.page==="postOverview"?"activeClass":""}`} to="/posts-overview">
									Overview</Link></li>

									
									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_feeds")
								}} className="hoverActiveRoute"></div>

									<li className={`${this.props.page==="all_feeds"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_feeds"?"activeClass":""}`} to="/all_feeds">
								Posts</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/reported_posts_table")
								}} className="hoverActiveRoute"></div>

									<li className={`${this.props.page==="reported_posts_table"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="reported_posts_table"?"activeClass":""}`} to="/reported_posts_table">
									Reported Post</Link></li>
									
							</ul>
							:""}			

<div onClick={(e)=>this.dropDown('topics')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-calendar-week"></i>Topics</li>
							{this.state.dropDownTopics === true?
							
							<ul className="dropdownlist">
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/topic_overview")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="create-event"?"activeClass":""}`}>
								<Link className={`${this.props.page==="groups-overview"?"activeClass":""}`} to="/topic_overview">
									Overview</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_topics")
								}} className="hoverActiveRoute"></div>
									<li className={`${this.props.page==="all_topics"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="all_topics"?"activeClass":""}`} to="/all_topics">
									Topics</Link></li>
									
							</ul>
							:""}	


<div onClick={(e)=>this.dropDown('users')} className="hoverActiveRoute"></div>
							<li ><i class="fas fa-users"></i>Users</li>
							{this.state.dropDownUsers === true?
							
							<ul className="dropdownlist">
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/user-overview")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="usersOverview" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="usersOverview"?"activeClass":""}`} to="/user-overview">
									Users Overview</Link></li>

                                
									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_users")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="allUsers" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="allUsers"?"activeClass":""}`} to="/all_users">
									All Users</Link></li>

									<div onClick={()=>{
									this.props.RouteUserLayout.push("/all_reported_users")
								}} className="hoverActiveRoute"></div>
								<li className={`${this.props.page==="reportedUsers"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="reportedUsers"?"activeClass":""}`} to="/all_reported_users">
									Reported Users</Link></li>
									
									
							</ul>
							:""}		

                           <div onClick={()=>{
									this.props.RouteUserLayout.push("/plans")
								}} className="hoverActiveRoute"></div>
							<li  className={`${this.props.page==="plans"?"activeClass":""}`}><i class="fas fa-th">
								
								</i>Plans</li>

<div className={`${this.props.page==="chats"?"activeClass":""}`} className="hoverActiveRoute"></div>
              	<li ><i class="far fa-comments"></i>Chats</li>

				  <div className={`${this.props.page==="chats"?"activeClass":""}`} className="hoverActiveRoute"></div>
              	<li ><i class="far fa-comments"></i>Referral</li>

				 

				  <div onClick={()=>{
									this.props.RouteUserLayout.push("/resources")
								}} className="hoverActiveRoute"></div>
              	<li className={`${this.props.page==="resources"?"activeClass":""}`}><i class="far fa-comments"></i>Resources</li>

				  <div className="hoverActiveRoute"></div>
							<li className={`${this.props.page==="email"?"activeClass":""}`}> <i class="fas fa-envelope-open-text"></i>Email</li>

							<div className="hoverActiveRoute"></div>
							<li className={`${this.props.page==="settings"?"activeClass":""}`}><i class="fas fa-cogs"></i> Settings</li>

						


								<div onClick={(e)=>this.dropDown('Affinity')} className="hoverActiveRoute"></div>
<li ><i class="fas fa-users"></i> Affinity Network</li>
							{this.state.dropDownAffinity===true?
							
							<ul className="dropdownlist">
								

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/affinity_network/offers")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="affinity_network/offers"?"activeClass":""}`}>
								<Link className={`${this.props.page==="affinity_network/offers"?"activeClass":""}`} to="/affinity_network/offers">
									Offers</Link></li>

								<li className={`${this.props.page==="affinity_network/partners"?"activeClass":""}`}> <Link 
								className={`${this.props.page==="affinity_network/partners"?"activeClass":""}`} to="/affinity_network/partners">
									Partners</Link></li>

									
							</ul>
							:""}



							<div onClick={(e)=>this.dropDown('board')} className="hoverActiveRoute"></div>
							<li ><i class="fas fa-users"></i>Opportunity  Board</li>
							{this.state.dropDownBoard === true?
							
							<ul className="dropdownlist">
								<div onClick={()=>{
									this.props.RouteUserLayout.push("/investment_opportunities")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="investment_opportunities" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="investment_opportunities"?"activeClass":""}`} to="/investment_opportunities">
								Investment Opportunities</Link></li>

                                
									<div onClick={()=>{
									this.props.RouteUserLayout.push("/funding_opportunities")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="funding_opportunities" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="funding_opportunities"?"activeClass":""}`}>
								Funding Opportunities</Link></li>

								

								<div onClick={()=>{
									this.props.RouteUserLayout.push("/other_opportunities")
								}} className="hoverActiveRoute"></div>

								<li className={`${this.props.page==="other_opportunities" ? "activeClass":""}`}>
								<Link className={`${this.props.page==="other_opportunities"?"activeClass":""}`} to="/other_opportunities">
								Other Opportunities</Link></li>

								
									
									
							</ul>
							:""}		


							<div className={`${this.props.page==="chats"?"activeClass":""}`} className="hoverActiveRoute"></div>
              	<li ><i class="far fa-comments"></i>Membership Gifting</li>
						</ul>
						</Scrollbars>
					</div>
				</div>
			</div>
		);
	}
}
