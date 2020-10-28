import React from 'react'
import DatePicker from "react-datepicker";
export default function GroupEvent(props) {
  return (
    <div>
      <div class="modal fade" id="groupEvent" tabindex="-1" role="dialog" aria-labelledby="groupEventLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="groupEventLabel">Create group event</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="add-investment-details-wrap">

          <div className="investment-details-input-wrap">
            <label>Event name</label>
            <input type="text" placeholder="Space X talk"/>
          </div>

         

          <div className="investment-details-input-wrap">
            <label> Event description</label>
            <textarea type="text" placeholder="About event"/>
          </div>


          <div className="investment-details-input-wrap">
            <label>Event start date</label>
          <DatePicker
   
   closeOnScroll={true}
   selected={props.eventTime.startDate} 
   onChange={date =>props.handleDateChange(date,"startDate")  }
   withPortal

   minDate={new Date()}
 />
</div>


<div className="investment-details-input-wrap">

 <label >Event end date</label>
   <DatePicker
   placeholderText="Click to select a date"
   closeOnScroll={true}
   selected={props.eventTime.endDate} 
   onChange={date =>props.handleDateChange(date,"endDate")  }
   withPortal

   minDate={props.eventTime.startDate}
 />
 </div>


 <div className="investment-details-input-wrap">
            <label>Event end time</label>

 <DatePicker
   selected={props.eventTime.startTime} 
   onChange={date =>props.handleDateChange(date,"startTime")  }
   showTimeSelect
   showTimeSelectOnly
   timeIntervals={15}
   timeCaption="Time"
   dateFormat="h:mm aa"
   name="time"
   // maxTime={new Date()}
 />
 </div>


 <div className="investment-details-input-wrap">
            <label>Event start time</label>

 <DatePicker
 style={{display:"none"}}
   selected={props.eventTime.endTime} 
   onChange={date =>props.handleDateChange(date,"endTime")  }
   showTimeSelect
   showTimeSelectOnly
   timeIntervals={15}
   timeCaption="Time"
   dateFormat="h:mm aa"
   

 />
 </div>


          <div className="investment-details-input-wrap">
            <label>Location</label>
            <input type="text" placeholder="eg USA"/>
          </div>


        


          <div className="investment-details-input-wrap">
            <label>Upload event banner</label>
          <div className="upload-investment-details">
              <div className="uploadInvesmet-input-submit">
                <button>Choose file</button>
                <input type="file"/>
              </div>

              <div className="uploadInvesmet-input-submit">
                <span>No file chosen</span>
              </div>


          </div>
          </div>


          
          <button className="submit-investment-btn">Create Group Event</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
