import React, { Component } from 'react'
import UpcomingEventTable from '../Tables/upComingEvents'
import PreviousEventTable from '../Tables/previousEvents'
import Layout from '../Layout/index'
import ComfirmModal from '../Modals/comfirmModal'
import UserRoute from '../UserRoute/Route'

export default class eventList extends Component {
    constructor(props){
        super(props)
        this.state={
            eventDate:"recentEvents"
        }
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        
        return (
            <div>
                <Layout RouteUserLayout={
					this.props.history
				} page="event-list" activepage="keepOpenEvents">
              
                <div style={{marginTop:"15px"}} class="form-group seletEventRecent">
      <select
  value={this.state.eventFee}
  name="eventDate"
 onChange={this.handleChange}
      class="form-control" id="exampleFormControlSelect1">
          <option value="recentEvents">Upcoming Events</option>
         <option value="previousEvents">Previous Event</option>
        
      </select>
    </div>

{
    this.state.eventDate === "recentEvents" ?(
        <div  id="event-list-wraper">
                    
        <h1 style={{marginTop:"-24px"}} className="eventListHeader">Upcoming Events</h1>

        <UpcomingEventTable/>
      <br/>
        </div>  
    ):(
        <div  id="event-list-wraper">
                    
        <h1 style={{marginTop:"-24px"}} className="eventListHeader">Previous Events</h1>

        <UpcomingEventTable/>
      <br/>
        </div>  
    )
}

               
              
                
                </Layout>
                <ComfirmModal/>
            </div>
        )
    }
}
