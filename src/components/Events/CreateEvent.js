import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import DatePicker from "react-datepicker";
import UserRoute from '../UserRoute/Route'
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import 'moment-timezone';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications'
export default class CreateEvent extends Component {
    constructor(props){
        super(props)
        this.state={
            startDate:new Date(),
            endDate:new Date(),
            startTime:new Date(),
            endTime:new Date(),
            eventType:"null",
            eventMedium:"",
            eventFee:"null",
            CTA:"Pay"
        }
        
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
      if(e.target.value === "freeEvent"){
        this.setState({
          CTA:"Register"
        })
        console.log(this.state.CTA)
      }

      if(e.target.value === "internal"){
        this.setState({
          eventType:"internal"
        })
      }

      if(e.target.value === "external"){
        this.setState({
          eventType:"external"
        })

        if(e === "endTime"){
          alert(e)
        }
      }


      let momentStartTime =   moment(this.state.startTime).format("hh:mm:ss a")
      let momentEndTime =   moment(this.state.endTime).format("hh:mm:ss a")
         console.log(momentStartTime, momentEndTime)
     
    //for paid internal event it should generate a link for payment and A default CTA of Pay 

    // if(e.target.value === "time"){
    //  alert(5)
    // }
    console.log(e.target.value)
      }
handleEndTime=(e,EndTime)=>{
  let momentEndTime =   moment(this.state.endTime).format("hh:mm:ss a");
  if(this.state.startTime === momentEndTime){
    alert(6)
  }
}

handleEventTime= (e,startTime) =>{
  if(e === "startTime"){
    // let momentStartTime =   moment(startTime).format("hh:mm:ss a")
  
  this.setState({
    startTime:startTime,
    // endTime:momentStartTime,
  })
  }

  if(e === "endTime"){
    // let momentStartTime =   moment(startTime).format("hh:mm:ss a")
  
  this.setState({
    endTime:startTime,
    // endTime:momentStartTime,
  })
  }

  if(this.state.endTime === this.state.startTime){
    alert(76)
  }
 
}

handleSubmit=(e)=>{
  e.preventDefault();

  let startTime = this.state.startTime
  let endTime = this.state.endTime
  let momentSTime =   moment(startTime).format("hh:mm:ss a");
  let momentEndTime =   moment(endTime).format("hh:mm:ss a");

  console.log(momentSTime, "....." , momentEndTime)
  if(momentSTime === momentEndTime){
  
    NotificationManager.error('Opps, Event End Time Must Be Greater Than Event Start Time', 5000);
  }
}

    render() {
      const now = moment(new Date()).format("hh:mm:ss a");
        return (
            <div>
                <Layout RouteUserLayout={
					this.props.history
				}  page="create-event" activepage="keepOpenEvents">
                {/* <UserRoute Route="Create" destination="Event" />
                <br/> */}
              
<div style={{borderRadius:"10px"}} id="event-wraper">
    <div className="center-event-form ">
    <h1>Create Event</h1>
    <form className="eventForm">
  <div class="form-group">
     
    <label >Title</label>
    <input type="text" class="form-control" id="title" placeholder="Enter Title"/>
  
  </div>
  <div class="form-group">
    <label >Event Maximum Capacity</label>
    <input type="number" class="form-control" id="Presenter" placeholder="How many people are you expecting?"/>
  </div>

  <div class="form-group">
    <label >Description</label>
    <textarea type="text" class="form-control" id="Presenter" placeholder="About Event"/>
  </div>



  <div class="form-group">
    <label >Medium</label>
    <select
    value={this.state.eventMedium}
    name="eventMedium"
   onChange={this.handleChange} 
      class="form-control"
       id="exampleFormControlSelect1">
         <option value="null">Select Event Medium</option>
      <option value="inperson">In-Person</option>
      <option value="virtual">Virtual</option>
      <option value="hybrid">Hybrid</option>
      
    </select>
  </div>

{
  this.state.eventMedium === "virtual" || this.state.eventMedium === "hybrid" ? (
    <div class="form-group">
    <label >Enter Link</label>
    <input type="text" class="form-control" id="address" placeholder="eg https://zoom.com"/>
  </div>
  ) : ""}

{
  this.state.eventMedium === "hybrid" || this.state.eventMedium === "inperson"  ? 
  (
    <div class="form-group">
      <label >Address</label>
      <input type="text" class="form-control" id="address" placeholder="Enter Event Venue"/>
    </div>   
    )
  : ""}

  <div class="form-group">
    <label >Event Type</label>
    <select
     value={this.state.eventType}
     name="eventType"
    onChange={this.handleChange} 
    class="form-control" id="exampleFormControlSelect1">
       <option value="null">Select Event Type</option>
        <option value="internal">Internal</option>
      <option value="external">External Event</option>

      
    </select>
  </div>


  {
    this.state.eventType === "internal" || this.state.eventType ===  "external" ?(
      <div class="form-group">
      <label >Is it paid or free?</label>
      <select
  value={this.state.eventFee}
  name="eventFee"
 onChange={this.handleChange}
      class="form-control" id="exampleFormControlSelect1">
          <option value="freeEvent">Free event</option>
         <option value="paidEvent">Paid event</option>
        
      </select>
    </div>
    ):""
  }


{
    this.state.eventType === "internal" & this.state.eventFee === "freeEvent" ?(
      <div>
  <div class="form-group">
<label >CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label >Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>


      </div>
    ) : ""
  }

{
    this.state.eventType === "internal" & this.state.eventFee === "paidEvent" ?(
      <div>


<div class="form-group">
    <label >Event Fee</label>
    <input type="text" class="form-control" id="register" placeholder="$ 50,000"/>

  </div>
      </div>
    ) : ""
  }


  {
    this.state.eventType === "external" & this.state.eventFee === "freeEvent" ?(
      <div>

<div class="form-group">
<label>CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label>Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>
      </div>
    ) : ""
  }


{
    this.state.eventType === "external" & this.state.eventFee === "paidEvent" ?(
      <div>

<div class="form-group">
    <label>CTA Button</label>
    <input type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>

  </div>

        <div class="form-group">
    <label>Registration Link</label>
    <input type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>

  <div class="form-group">
    <label>Event Fee</label>
    <input type="text" class="form-control" id="register" placeholder="$ 50,000"/>

  </div>
      </div>
    ) : ""
  }

 
<div className="datePickerEvent">
<div class="form-group">
    <label >Event Start Date</label>
    <DatePicker
   
      closeOnScroll={true}
      selected={this.state.startDate} 
      onChange={date => this.setState({startDate:date,endDate:date})  }
      withPortal
 
      minDate={new Date()}
    />
  </div>


  <div class="form-group">
    <label >Event End Date</label>
      <DatePicker
      placeholderText="Click to select a date"
      closeOnScroll={true}
      selected={this.state.endDate} 
      onChange={date => this.setState({endDate:date})  }
      withPortal
 
      minDate={this.state.startDate}
    />
  </div>

  
</div>

<div className="datePickerEvent">
<div class="form-group">
    <label >Event Start Time</label>

    <DatePicker
      selected={this.state.startTime} 
      onChange={date => this.handleEventTime("startTime",date)  } 
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      name="time"
      // maxTime={new Date()}
    />
  </div>


  <div class="form-group">
    <label >Event End Time</label>
    <DatePicker
    style={{display:"none"}}
      selected={this.state.endTime} 
      onChange={date => this.handleEventTime("endTime",date)  }
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      
 
    />
  </div>
</div>
 
 
<div class="form-group">
    <div className="getEventImage">
      <input type="file" class="hideEventInput" id="address" placeholder="Enter Event Venue"/>
      <div className="eventImageInfo">
          <p>Drop Image</p>
          <p>Or</p>
          <button>Browse</button>
          </div>  
    </div>
    
  </div>
  <div className="Esubmitbtn">
      <button onClick={this.handleSubmit}>Submit</button>
  </div>
</form>
    </div>
</div>
                </Layout>
                
            </div>
        )
    }
}
