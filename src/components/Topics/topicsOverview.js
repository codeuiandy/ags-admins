import React, { Component } from 'react'
import Layout from '../Layout/index'
import '../Groups/index.css'
import {Link} from 'react-router-dom'
import TopicUpdates from './topicUpdates'
import UserRoute from '../UserRoute/Route'
export default class topicsOverview extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenTopics" page="groups-overview" >
               
           
              <div className="createGrpbtn8">
                  <button> <Link to="/create_topic_edit_topic">Create Topic</Link></button>
              </div>
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1> <i class="fa fa-envelope" aria-hidden="true"></i> Notifications</h1>
    <p>1223</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

 Total Topics</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i> Active Topics</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Topics</h1>
<p>12</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Topics</h1>
<p>12</p>
       </div>
</div>
               
<div className="grp-overview-table">
<TopicUpdates/>
</div>
            </Layout>
        )
    }
}
