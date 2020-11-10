// import React, { Component } from 'react'
// import Layout from '../Layout/index'
// import './index.css'
// import {Link} from 'react-router-dom'
// import EventUpdates from './eventsUpdates'
// // import UserRoute from '../UserRoute/Route'
// export default class eventOverview extends Component {
//     render() {
//         return (
//             <Layout RouteUserLayout={
//                 this.props.history
//             } page="event_overview" activepage="keepOpenEvents"> 
                
             
//               <div className="createGrpbtn8">
//               <Link to="/create_event/create/none">  <button> Create Event</button></Link>
//               </div>
//                 <div className="grp-overview">
//     <div className="grp-overview1">
//     <h1> <i class="fa fa-envelope" aria-hidden="true"></i> Total Interested</h1>
//     <p>1223</p>
//     </div>

//     <div className="grp-overview1">
//     <h1> <i class="fa fa-users" aria-hidden="true"></i> 

//     Total Going Total Interested</h1>
   
// <p>12</p>


//         </div>

//         <div className="grp-overview1">
       
//         <h1> <i class="fa fa-users" aria-hidden="true"></i>Total Active Events  Total Going Total Interested</h1>
// <p>12</p>
//         </div>


//         <div className="grp-overview1">
       

//         <h1>  <i class="fa fa-flag" aria-hidden="true"></i>Past Events Total Active Events  Total Going Total Interested</h1>
// <p>12</p>
//         </div>

//         <div className="grp-overview1">
       

//        <h1>  <i class="fa fa-flag" aria-hidden="true"></i>Total Clicks Past Events Total Active Events  Total Going Total Interested</h1>
// <p>12</p>
//        </div>
// </div>
               
// <div className="grp-overview-table">
// <EventUpdates/>
// </div>
//             </Layout>
//         )
//     }
// }




import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import {Link} from 'react-router-dom'
import EventUpdates from './eventsUpdates'
import {httpGet} from '../helpers/httpMethods'
export default class eventOverview extends Component {
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
        const res = await httpGet('events/get_stats/')
        if (res.status === 200) { 
            console.log(res)
            this.setState({groupStatcs:res.data})
        }
       
    }

    render() {
        let groupStatcs = this.state.groupStatcs

        return (
            <Layout  RouteUserLayout={
                this.props.history
            } page="event_overview" activepage="keepOpenEvents"> 
                
     
{/*              
              <div className="createGrpbtn8">
                  <button> <Link to="/create_group_edit_group">Create Group</Link></button>
              </div> */}
                <div className="grp-overview">
    <div className="grp-overview1">
    <h1> <i class="fa fa-envelope" aria-hidden="true"></i>Total Interested</h1>
        <p>{groupStatcs.total_interested}</p>
    </div>

    <div className="grp-overview1">
    <h1> <i class="fa fa-users" aria-hidden="true"></i> 

    Total Going </h1>
   
        <p>{groupStatcs.total_going}</p>

 
        </div>

        <div className="grp-overview1">
       
        <h1> <i class="fa fa-users" aria-hidden="true"></i> Total Active Events  </h1>
<p>{groupStatcs.total_active}</p>
        </div>


        <div className="grp-overview1">
       

        <h1>  <i class="fa fa-flag" aria-hidden="true"></i>  Past Events </h1>
<p>{groupStatcs.total_past}</p>
        </div>

        <div className="grp-overview1">
       

       <h1>  <i class="fa fa-flag" aria-hidden="true"></i> Total Clicks</h1>
<p>90</p>
       </div>
</div>
               
<div className="grp-overview-table">
<EventUpdates  groupStatsDatax={groupStatcs} />
</div>
            </Layout>
        )
    }
}





