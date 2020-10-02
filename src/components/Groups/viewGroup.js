import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import GrpUpdates from './GrpUpdates'
import UserRoute from '../UserRoute/Route'
import ViewGrpStatictics from './viewGrpStatictics'
 import ClosedGrpRequests from '../Tables/closedGrpRequests'
export default class viewGroup extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenGroup" page="groups-overview" >

                <div className="viewgroupTitle"> <h1>Bright Minds Fish Club</h1></div>
               
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1>  Total Posts</h1>
    <p>1223</p>
    </div>

    <div className="grp-overview1">
    <h1>

 Total Comments</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1>Total Likes</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>Last Active Date</h1>
<p>12/01/2020</p>
        </div>

        <div className="grp-overview1">
       

       <h1><Link to="/group_members">Members</Link></h1>
<p><Link to="/group_members">12</Link></p>
       </div>
</div>
               
<div className="grp-overview-table">
<ViewGrpStatictics/>
</div>
<div className="viewgroupTitle" style={{marginBottom:"20px",marginTop:"-20px",marginLeft:"3px"}}> <h1>Group Join Request</h1></div>
      <div className="closedGRpRequests">
          
          <ClosedGrpRequests/>
          </div>
            </Layout>
        )
    }
}
