import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout/index";
import {Index} from "./components/Dashboard/index";
import CreateEvent from './components/Events/CreateEvent'
import EventList from './components/Events/eventList'
import ViewEvent from './components/Events/viewEvent'
import Group from './components/Groups/group'
import {AllGroups} from './components/Groups/allGroups'
import './App.css'
import Plans from './components/Plan/overview'
import {CreateGroup} from './components/Groups/createGroup'
import PostsOverview from './components/Posts/overview'
import CreatePosts from './components/Posts/indexPost'
import ReportedPostsTable from './components/Posts/reportedPostTable'
import TopicsOverview from './components/Topics/topicsOverview'
import {CreateTopics} from './components/Topics/create-topics'
import {AllTopicsData} from './components/Topics/AllTopicsData'
import UsersOverView from './components/Users/userOver'
import Allusers from './components/Users/allUsers'
import AllReportedUsers from './components/Users/allReportedUsers'
import UserInfo from './components/Users/userInfo'
import {ViewGroup} from './components/Groups/viewGroup'
import { GrpMembersView } from './components/Groups/grpMembers'
import EventOverview from "./components/Events/eventOverview";
import AllFeeds from "./components/Posts/allFeeds";
import 'react-notifications/lib/notifications.css';
import {Login} from './components/Login/login'
import {ViewTopic} from './components/Topics/viewTopicDetails'
import {TopicFollowers} from './components/Topics/topicFollowers'
import {EditGroup} from './components/Groups/editGroup'
import {EditTopic} from './components/Topics/EditTopic'
import EditPost from './components/Posts/editPost'
import InvestmentOpportunities from './components/OpportunityBoard/InvestmentOpportunities.jsx'
import InvestmentOpportunitiesSlide2 from './components/OpportunityBoard/opportunityBoardStep2.jsx'
import ViewInvestment from './components/OpportunityBoard/ViewInvestmentOpportunities'
import FundingOpportunities from './components/OpportunityBoard/fundingOptionity'

import {NotificationManager,NotificationContainer} from 'react-notifications'
function App() {
	return (
		<div className="App">
			    <NotificationContainer/>
			<Router>

				{/* <ToastContainer /> */}
				<Switch>
					<Route exact path="/" component={Login} />
					{/* <Route exact path="/login" component={Login} /> */}
						<Route exact path="/dashboard" component={Index} />
						<Route exact path="/create_event" component={CreateEvent} />
						<Route exact path="/event_list" component={EventList} />
						<Route exact path="/view_event" component={ViewEvent} />
						<Route exact path="/groups" component={Group} />
						<Route exact path="/create_group_edit_group" component={CreateGroup} />
						<Route exact path="/all_groups" component={AllGroups} />
						<Route exact path="/plans" component={Plans} />
						<Route exact path="/posts-overview" component={PostsOverview} />
						<Route exact path="/create_posts" component={CreatePosts} />
						<Route exact path="/reported_posts_table" component={ReportedPostsTable} />
						<Route exact path="/topic_overview" component={TopicsOverview} />
						<Route exact path="/create_topic_edit_topic" component={CreateTopics} />
						<Route exact path="/all_topics" component={AllTopicsData} />
						<Route exact path="/user-overview" component={UsersOverView} />
						<Route exact path="/all_users" component={Allusers} />
						<Route exact path="/all_reported_users" component={AllReportedUsers} />
						<Route exact path="/user_info/:id" component={UserInfo} />
						<Route exact path="/view_group/:id" component={ViewGroup} />
						<Route exact path="/view_topic/:id" component={ViewTopic} />
						<Route exact path="/group_members/:id" component={GrpMembersView} />
						<Route exact path="/event_overview" component={EventOverview} />
						<Route exact path="/all_feeds" component={AllFeeds} />
						<Route exact path="/topic_followers/:id" component={TopicFollowers} />
						<Route exact path="/edit_group/:id" component={EditGroup} />
						<Route exact path="/edit_topic/:id" component={EditTopic} />
						<Route exact path="/edit_post/:type/:id" component={EditPost} />
						<Route exact path="/investment_opportunities" component={InvestmentOpportunities} />
						<Route exact path="/investment_opportunities_step2" component={InvestmentOpportunitiesSlide2} />
						<Route exact path="/view_investment/:id" component={ViewInvestment} />
						<Route exact path="/funding_opportunities" component={FundingOpportunities} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
