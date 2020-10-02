import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import EventUpdates from './eventsUpdates'
// import UserRoute from '../UserRoute/Route'
export default class eventOverview extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } page="event_overview" activepage="keepOpenEvents"> 
                
             
              <div className="createGrpbtn8">
              <Link to="/create_event">  <button> Create Event</button></Link>
              </div>
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1> <i class="fa fa-envelope" aria-hidden="true"></i> Total Interested</h1>
    <p>1223</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

    Total Going</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i>Total Active Events</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i>Past Events</h1>
<p>12</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i>Total Clicks</h1>
<p>12</p>
       </div>
</div>
               
<div className="grp-overview-table">
<EventUpdates/>
</div>
            </Layout>
        )
    }
}
