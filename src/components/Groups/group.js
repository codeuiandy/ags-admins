import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import GrpUpdates from './GrpUpdates'
import {httpGet} from '../helpers/httpMethods'
export default class group extends Component {
    constructor(props){
        super(props)
        this.state={
            groupStatcs:[]
        }
    }
    componentDidMount(){
        this.getGroupStats()
        
    }

    getGroupStats=async()=>{
        const res = await httpGet('groups/get_stats/')
        if (res.status === 200) { 
            console.log(res)
            this.setState({groupStatcs:res.data})
        }
       
    }

    render() {
        let groupStatcs = this.state.groupStatcs
//         active_groups: 5
// flagged_groups: 0
// flagged_posts: 1
// latest: [{id: "42f7f22a-b195-4807-aec9-e21f9d8b8954", name: "Hip Hop"},…]
// low: []
// notification: 36
// top: [{id: "6fa5c0ac-7452-4c4f-8113-167a561766b6", name: "Meta Might", post__id__count: 11},…]
// total_groups: 5
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
        <p>{groupStatcs.notification}</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

 Total Groups</h1>
   
        <p>{groupStatcs.total_groups}</p>


        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i> Active Groups</h1>
<p>{groupStatcs.active_groups}</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Posts</h1>
<p>{groupStatcs.flagged_posts}</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Groups</h1>
<p>{groupStatcs.flagged_groups}</p>
       </div>
</div>
               
<div className="grp-overview-table">
<GrpUpdates  groupStatsDatax={groupStatcs} />
</div>
            </Layout>
        )
    }
}
