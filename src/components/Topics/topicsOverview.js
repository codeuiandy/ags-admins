import React, { Component } from 'react'
import Layout from '../Layout/index'
import TopicStatcs from './topicUpdates'
import {Link} from 'react-router-dom'

import {httpGet} from '../helpers/httpMethods'
export default class group extends Component {
    constructor(props){
        super(props)
        this.state={
            topicstatcs:[]
        }
    }
    componentDidMount(){
        this.gettopicstats()
        
    }

    gettopicstats=async()=>{
        const res = await httpGet('topics/get_stats/')
        if (res.status === 200) { 
            console.log(res)
            this.setState({topicstatcs:res.data})
        }
       
    }

    render() {
        let topicstatcs = this.state.topicstatcs

        return (
            <Layout RouteUserLayout={
                this.props.history
            } activepage="keepOpenGroup" page="topics-overview" >
     
             
              {/* <div className="createGrpbtn8">
                  <button> <Link to="/create_group_edit_group">Create Group</Link></button>
              </div> */}
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1> <i class="fa fa-envelope" aria-hidden="true"></i> Notifications</h1>
        <p>{topicstatcs.notification}</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

 Total topics</h1>
   
        <p>{topicstatcs.total_topics}</p>


        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i> Active topics</h1>
<p>{topicstatcs.active_topics}</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged Posts</h1>
<p>{topicstatcs.flagged_posts}</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Flagged topics</h1>
<p>{topicstatcs.flagged_topics}</p>
       </div>
</div>
               
<div className="grp-overview-table">
<TopicStatcs groupStatsDatax={topicstatcs}/>
</div>
            </Layout>
        )
    }
}
