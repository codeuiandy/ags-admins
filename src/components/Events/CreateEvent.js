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
import ValidateURL from '../helpers/ValidateURL'
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
            eventAddress :"",
            eventLink:"",
            eventType:"",
            paidOrFree:"",
            CTABtn:"",
            registrationLink:"",
            eventFee:"",
            eventCity:"",
            eventImage:"",
            TitleError:"",
            eventImageError:"",
             eventFeeError:"",
              eventMediumError:"",
               eventTypeError:"",
                DescrpionError:"",
                adressCityError:"",
                iventLinkError:"",
        }
        
    }

    handleFileChange=(e)=>{
      this.setState({ [e.target.name]: e.target.files[0] });
      this.setState({
        eventImageError:"",
      })
    }
    

    handleChange  =  (e) => {
      e.preventDefault();
      this.setState({
        TitleError:"",
        eventImageError:"",
         eventFeeError:"",
          eventMediumError:"",
           eventTypeError:"",
            DescrpionError:"",
            adressCityError:"",
            iventLinkError:""
      })
      this.setState({ [e.target.name]: e.target.value });
      if(e.target.value === "free_event"){
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

    console.log(e.target.value)
      }
handleEndTime=(e,EndTime)=>{
  let momentEndTime =   moment(this.state.endTime).format("hh:mm:ss a");
  if(this.state.startTime === momentEndTime){
    alert(6)
  }
}


handleInputErrors=()=>{
  if (this.state.eventName === "" || this.state.eventName === undefined || this.state.eventName === null ) {
    this.setState({TitleError:"Event name cant be blank"})
    return false
  }

  if (this.state.enentDescrpion === "" || this.state.enentDescrpion === undefined || this.state.enentDescrpion === null ) {
    this.setState({DescrpionError:"Description  cant be blank"})
    return false 
  }

  if (this.state.eventType === "" || this.state.eventType === undefined || this.state.eventType === null ) {
    this.setState({eventTypeError:"Select event type"})
    return false 
  }

  if (this.state.eventMedium === "" || this.state.eventMedium === undefined || this.state.eventMedium === null ) {
    this.setState({eventMediumError:"Select event medium"})
    return false 
  }

  if (this.state.eventMedium === "hybrid" || this.state.eventMedium === "in_person" ) {
  
    if ( this.state.eventAddress === "" || this.state.eventAddress === undefined 
    || this.state.eventAddress === null  || this.state.eventCity === "" ||
     this.state.eventCity === undefined || this.state.eventCity === null) {
      this.setState({adressCityError:"Address and city is required"})

      return false
    }
    
  }

  if (this.state.eventMedium === "hybrid" || this.state.eventMedium === "virtual" ) {
   let checkURL = ValidateURL(this.state.eventLink)
    
    if (checkURL === false) {
       this.setState({iventLinkError:"Invalid URL"})
       return false
    }
  }

  if (this.state.paidOrFree === "paid_event" ) {
  
    if (this.state.eventFee === "" || this.state.eventFee === undefined || this.state.eventFee === null ) {
      this.setState({eventFeeError:"Add event fee "})
      return false 
    }
    
  }



  if (this.state.eventImage === "" || this.state.eventImage === undefined || this.state.eventImage === null ) {
    this.setState({eventImageError:"Add event image"})
    return false
  }


  

  return true
}

handleSubmit=async(e)=>{
  e.preventDefault();
console.log(this.state)
  let StartDate = this.state.startDate
  let StartTime = this.state.startTime

  let EndDate = this.state.endDate
  let EndTime = this.state.endTime

  let EstartDate = moment(StartDate).format("YYYY-MM-DD")
  let EstartTime = moment(StartTime).format("HH:mm:ss")

  let EEndDate = moment(EndDate).format("YYYY-MM-DD")
  let EEndTime = moment(EndTime).format("HH:mm:ss")

  let StartTimeAndDate = moment(EstartDate + ' ' + EstartTime);

  let EndStartTimeAndDate = moment(EEndDate + ' ' + EEndTime);

  let FormatStartDate =   moment(StartTimeAndDate).format("YYYY-MM-DDThh:mm");
  let FormatEndDate =   moment(EndStartTimeAndDate).format("YYYY-MM-DDThh:mm");

  // if(FormatStartDate === FormatEndDate){
  
  //   NotificationManager.error('Opps, event end time must be greater than event start time', 5000);
  //   return
  // }


  let CheckError = this.handleInputErrors()
  if (CheckError === true) {

    try {
      showLoader()
      const formData = new FormData();
      formData.append('title', this.state.eventName);
      formData.append('seats', this.state.eventMaxCapacity);
      formData.append('description', this.state.enentDescrpion);
      formData.append('medium', this.state.eventMedium);
      formData.append('address', this.state.eventAddress);
      formData.append('link', this.state.eventLink);
      formData.append('event_type', this.state.eventType);
      formData.append('free', this.state.paidOrFree === "free_event" ? true : false);
      formData.append('cta_button', this.state.paidOrFree === "free_event" && this.state.eventType
       === "interanl" ? "Attend" : this.state.CTABtn);
      formData.append('registration_link', this.state.registrationLink);
      formData.append('price', this.state.eventFee);
      formData.append('banner', this.state.eventImage);
      formData.append('start_datetime', FormatStartDate);
      formData.append('end_datetime', FormatEndDate);
      formData.append('city', this.state.eventCity);
      
        let res = await httpPostFormData(`events/`,formData)
    
       console.log("res status",res) 
       if (res.status === 201) {
               hideLoader()
        console.log(res)
        this.setState({
          eventName:"",
          eventMaxCapacity:"",
          enentDescrpion:"",
          eventMedium:"",
          eventType:"null",
          eventAddress :"",
          eventLink:"",
          eventType:"",
          paidOrFree:"",
          CTABtn:"",
        })

        NotificationManager.success(
           "Event created successfully.",
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
              <span className="eventErrorMessage">{this.state.TitleError}</span>
  </div>
  <div class="form-group">
    <label >Event Maximum Capacity</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventMaxCapacity" type="number" class="form-control"
     id="Presenter" placeholder="How many people are you expecting?"/>
     
  </div>

  <div class="form-group">
    <label >Description</label>
    <textarea onChange={(e)=>this.handleChange(e)} name="enentDescrpion" 
    type="text" class="form-control" id="Presenter" placeholder="About Event"/>
     <span className="eventErrorMessage">{this.state.DescrpionError}</span>
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
      <option value="in_person">In-Person</option>
      <option value="virtual">Virtual</option>
      <option value="hybrid">Hybrid</option>
      
    </select>
    <span className="eventErrorMessage">{this.state.eventMediumError}</span>
  </div>

{
  this.state.eventMedium === "virtual" || this.state.eventMedium === "hybrid" ? (
    <div class="form-group">
    <label >Enter Link</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventLink"  type="text" 
    class="form-control" id="address" placeholder="eg https://zoom.com"/>
    <span className="eventErrorMessage">{this.state.iventLinkError}</span>
  </div>
  ) : ""}

  


{
  this.state.eventMedium === "hybrid" || this.state.eventMedium === "in_person"  ? 
  (
    <div class="form-group">
      <label >Address</label>
      <input onChange={(e)=>this.handleChange(e)} name="eventAddress" type="text" class="form-control" 
      id="address" placeholder="Enter Event Venue"/>
      <span className="eventErrorMessage">{this.state.adressCityError}</span>
    </div>  
    
    
    )
  : ""}

{
  this.state.eventMedium === "hybrid" || this.state.eventMedium === "in_person"  ? 
  (
    <div class="form-group">
      <label >City</label>
      <input onChange={(e)=>this.handleChange(e)} name="eventCity" type="text" class="form-control"
       id="city" placeholder="Enter Event City"/>
       <span className="eventErrorMessage">{this.state.adressCityError}</span>
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
    <span className="eventErrorMessage">{this.state.eventTypeError}</span>
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
          <option value="free_event">Free event</option>
         <option value="paid_event">paid event</option>
        
      </select>
    </div>
    ):""
  }


{
    this.state.eventType === "internal" & this.state.paidOrFree === "free_event" ?(
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
    this.state.eventType === "internal" & this.state.paidOrFree === "paid_event" ?(
      <div>


<div class="form-group">
    <label >Event Fee</label>
    <input onChange={(e)=>this.handleChange(e)} name="eventFee" type="number" class="form-control" id="register" placeholder="$ 50,000"/>
    <span className="eventErrorMessage">{this.state.eventFeeError}</span>
  </div>
      </div>
    ) : ""
  }

  {  
    this.state.eventType === "external" & this.state.paidOrFree === "free_event" ?(
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
    this.state.eventType === "external" & this.state.paidOrFree === "paid_event" ?(
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
    <input onChange={(e)=>this.handleChange(e)} name="eventFee" type="number" class="form-control" id="register" placeholder="$ 50,000"/>
    <span className="eventErrorMessage">{this.state.eventFeeError}</span>
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
      <div className="eventImageInfo" style={this.state.eventImage === ""?{left:"22%"}:{left:"20%"}}>
        {
          this.state.eventImage === "" ? "":<img style={{width:"90px",height:"70px",borderRadius:"3px"}} src={URL.createObjectURL(this.state.eventImage)} />
        }
          {
          this.state.eventImage === ""? <div className="centerAddEventImg">
            <p>Drop Image</p>
          <p>Or</p></div> :""
        }

          <button> {
          this.state.eventImage === ""?"Browse":"Change image"}</button>
          </div>  
    </div>
    <span className="eventErrorMessage">{this.state.eventImageError}</span>
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
