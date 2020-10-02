import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import GrpUpdates from './GrpUpdates'
import UserRoute from '../UserRoute/Route'
export default class group extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenGroup" page="groups-overview" >
     
             
              <div className="createGrpbtn8">
                  <button> <Link to="/create_group_edit_group">Create Group</Link></button>
              </div>
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1> <i class="fa fa-envelope" aria-hidden="true"></i> Notifications</h1>
    <p>1223</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

 Total Groups</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i> Active Groups</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Posts</h1>
<p>12</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Feeds</h1>
<p>12</p>
       </div>
</div>
               
<div className="grp-overview-table">
<GrpUpdates/>
</div>
            </Layout>
        )
    }
}
