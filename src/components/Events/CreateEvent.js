import React, { Component } from 'react'
import Layout from '../Layout/index'
import './index.css'
import DatePicker from "react-datepicker";
import UserRoute from '../UserRoute/Route'
import {httpPostFormData,httpPut,httpPatch} from '../helpers/httpMethods'
import {hideLoader, showLoader} from '../helpers/loader'
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
            eventFee:"null",
            CTA:"Pay",

            eventName:"",
            eventMaxCapacity:"",
            enentDescrpion:"",
            eventMedium:"",
            eventType:"null",
            eventAddress:"",
            eventLink:"",
            eventType:"",
            paidOrFree:"",
            CTABtn:"",
            registrationLink:"",
            eventFee:"",
            eventImage:"",
        }
        
    }

    handleFileChange=(e)=>{
      this.setState({ [e.target.name]: e.target.files[0] });
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({ [e.target.name]: e.target.value });
      if(e.target.value === "free event"){
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

handleSubmit=async(e)=>{
  e.preventDefault();
console.log(this.state)
  // let startTime = this.state.startTime
  // let endTime = this.state.endTime
  // let momentSTime =   moment(startTime).format("hh:mm:ss a");
  // let momentEndTime =   moment(endTime).format("hh:mm:ss a");

  // console.log(momentSTime, "....." , momentEndTime)
  // if(momentSTime === momentEndTime){
  
  //   NotificationManager.error('Opps, event end time must be greater than event start time', 5000);
  // }

            //   eventName:"",
            // eventMaxCapacity:"",
            // enentDescrpion:"",
            // eventMedium:"",
            // eventType:"null",
            // eventAddress:"",
            // eventLink:"",
            // eventType:"",
            // paidOrFree:"",
            // CTABtn:"",
            // registrationLink:"",
            // eventFee:"",
            // eventImage:"",

    //         "title": "The title of the event"
    // "banner": "image"
    // "description": "Description"
    // "start_datetime": "startdate and time format - YYYY-MM-DDThh:mm"
    // "location": "location"
    // "city": "the city"
    // "address": "The address, it can be null"
    // "medium": "Maybe it is vritual or face to face something like that",
    // "end_datetime", "When the event ends, use same datetime format"
    // "event_type": "The event type"
    // "price": "If it is not a free event, if is, just put 0"
    // "status": "open or close", 
    // "free": false or true,
    // "seats": "number of seats (integer)"
  // else{
    try {
      const formData = new FormData();
      formData.append('title', this.state.eventName);
      formData.append('seats', this.state.eventMaxCapacity);
      formData.append('description', this.state.enentDescrpion);
      formData.append('medium', this.state.eventMedium);
      formData.append('location', this.state.eventAddress);
      // formData.append('name', this.state.eventLink);
      formData.append('event_type', this.state.eventType);
      formData.append('free', this.state.paidOrFree === "free event" ? true : false);
      // formData.append('name', this.state.CTABtn);
      // formData.append('name', this.state.registrationLink);
      formData.append('price', this.state.eventFee);
      formData.append('banner', this.state.eventImage);

        let res = await httpPostFormData(`events/`,formData)
       console.log("res status",res) 
       if (res.status === 200) {
               hideLoader()
        console.log(res)


        NotificationManager.success(
           "Group edited successfully.",
          "Yepp",
          3000
      );
       }
      
    
        hideLoader()
  } catch (error) {
      console.log(error.response)
      NotificationManager.success(
          error,
         "Opps",
         3000
     );
      hideLoader()
  // }
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
    <input onChange={(e)=>this.handleChange(e)} name="eventName" type="text" class="form-control" id="title" placeholder="Enter Title"/>

  </div>
  <div class="form-group">
    <label >Event Maximum Capacity</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventMaxCapacity" type="number" class="form-control" id="Presenter" placeholder="How many people are you expecting?"/>
  </div>

  <div class="form-group">
    <label >Description</label>
    <textarea onChange={(e)=>this.handleChange(e)} name="enentDescrpion" type="text" class="form-control" id="Presenter" placeholder="About Event"/>
  </div>



  <div class="form-group">
    <label >Medium</label>
    <select
    value={this.state.eventMedium}
    name="eventMedium"
    onChange={(e)=>this.handleChange(e)} 
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
    <input onChange={(e)=>this.handleChange(e)} name="eventLink"  type="text" class="form-control" id="address" placeholder="eg https://zoom.com"/>
  </div>
  ) : ""}

  


{
  this.state.eventMedium === "hybrid" || this.state.eventMedium === "inperson"  ? 
  (
    <div class="form-group">
      <label >Address</label>
      <input onChange={(e)=>this.handleChange(e)} name="eventAddress" type="text" class="form-control" id="address" placeholder="Enter Event Venue"/>
    </div>  
    
    
    )
  : ""}

  <div class="form-group">
    <label >Event Type</label>
    <select
     value={this.state.eventType}
     name="eventType"
     onChange={(e)=>this.handleChange(e)} 
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
  value={this.state.paidOrFree}
  name="paidOrFree"
  onChange={(e)=>this.handleChange(e)} 
      class="form-control" id="exampleFormControlSelect1">
          <option value="free event">Free event</option>
         <option value="paid event">Paid event</option>
        
      </select>
    </div>
    ):""
  }


{
    this.state.eventType === "internal" & this.state.paidOrFree === "free event" ?(
      <div>
  <div class="form-group">
<label >CTA Button</label>
    <input onChange={(e)=>this.handleChange(e)} name="CTABtn" type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label >Registration Link</label>
    <input onChange={(e)=>this.handleChange(e)} name="registrationLink" type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>

 
      </div>
    ) : ""
  }

{
    this.state.eventType === "internal" & this.state.paidOrFree === "paid event" ?(
      <div>


<div class="form-group">
    <label >Event Fee</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventFee" type="text" class="form-control" id="register" placeholder="$ 50,000"/>

  </div>
      </div>
    ) : ""
  }

  {
    this.state.eventType === "external" & this.state.paidOrFree === "free event" ?(
      <div>

<div class="form-group">
<label>CTA Button</label>
    <input onChange={(e)=>this.handleChange(e)} name="CTABtn" type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>


  </div>

        <div class="form-group">
    <label>Registration Link</label>
    <input onChange={(e)=>this.handleChange(e)} name="registrationLink" type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>
      </div>
    ) : ""
  }


{
    this.state.eventType === "external" & this.state.paidOrFree === "paid event" ?(
      <div>

<div class="form-group">
    <label>CTA Button</label>
    <input onChange={(e)=>this.handleChange(e)} name="CTABtn" type="text" class="form-control" id="register" placeholder="e.g Register, Attend"/>

  </div>

        <div class="form-group">
    <label onChange={(e)=>this.handleChange(e)} name="registrationLink">Registration Link</label>
    <input  onChange={(e)=>this.handleChange(e)} name="registrationLink" type="text" class="form-control" id="register" placeholder="Event registration link"/>

  </div>

  <div class="form-group">
    <label>Event Fee</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventFee" type="text" class="form-control" id="register" placeholder="$ 50,000"/>

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
      <input  onChange={(e)=>this.handleFileChange(e)} name="eventImage" type="file" class="hideEventInput" id="address" placeholder="Enter Event Venue"/>
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
