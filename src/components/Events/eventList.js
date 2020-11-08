import React, { Component } from 'react'
import UpcomingEventTable from '../Tables/upComingEvents'
import PreviousEventTable from '../Tables/previousEvents'
import Layout from '../Layout/index'
import ComfirmModal from '../Modals/comfirmModal'
import UserRoute from '../UserRoute/Route'
import {httpPostFormData,httpPut,httpPatch,httpGet} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import 'moment-timezone';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications'

export default class eventList extends Component {
    constructor(props){
        super(props)
        this.state={
            eventDate:"recentEvents",
            activeEvents:[],
            pastEvents:[],
        }
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
    }

    componentDidMount(){
        this.getEvents()
    }

    getEvents=async()=>{
        try {
            const res = await httpGet(`events/`)
            if (res.status === 200) {
                this.setState({
                    activeEvents:res.data.active,
                    pastEvents:res.data.past
                })
            }
            console.log(this.state)
        } catch (error) {
            
        }
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
        <div  className="table-wrap">
                    
        <h1 style={{marginTop:"-24px"}} className="eventListHeader">Upcoming Events</h1>

        <UpcomingEventTable activeEvents={this.state.activeEvents}/>
      <br/>
        </div>  
    ):(
        <div  className="table-wrap">
                    
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
