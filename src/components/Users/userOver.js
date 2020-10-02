
import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import UsersUpdates from './userUpdates'
import UserRoute from '../UserRoute/Route'
export default class group extends Component {
    render() {
        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenUsers" page="usersOverview">
              
             

                <div className="grp-overview">
    <div className="grp-overview1">
    <h1>Invites Sent</h1>
    <p>23</p>
    </div>

    <div className="grp-overview1">
    <h1>  

    Invites Accepted</h1>
   
<p>12</p>


        </div>

        <div className="grp-overview1">
       
        <h1>  Active Users</h1>
<p>12</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  Inactive Users</h1>
<p>12</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  All Users</h1>
<p>1223</p>
       </div>
</div>
               
<div className="grp-overview-table">
<UsersUpdates/>
</div>
            </Layout>
        )
    }
}
