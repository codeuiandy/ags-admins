import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddOfferModal(props) {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="SessionModal" tabindex="-1" role="dialog" aria-labelledby="SessionModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="SessionModal">{props.pageType === "edit" ? "Edit" : "Create" } Session</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={props.handleSubmit} className="">

                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>Session  cover Image <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input  
                    required={props.pageType === "edit" ? false : true}
                    accept=".jpg,.jpeg,.png"
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="sessionCover" type="file"/>
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    {
                    props.sessionData.sessionCover === "" ? 
                    <img style={{width:"60px",height:"50px"}} 
                    src={props.sessionData.previewImg} alt="" srcset=""/> : 
                     props.sessionData.sessionCover.name
                  }
             </div>
        </div>
    </div>

    <div className="investment-details-input-wrap">
  <label>Session Title <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <input type="text" required placeholder="e,g your text here"
  value={props.sessionData.sessionTitle} 
  onChange={(e)=>props.handleChange(e)} 
  name="sessionTitle"
  />
</div>

<div className="investment-details-input-wrap">
  <label>Speaker <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <input required type="text" placeholder="e,g your text here"
  value={props.sessionData.speaker} 
  onChange={(e)=>props.handleChange(e)} 
  name="speaker"
  />
</div>



<div className="investment-details-input-wrap">
  <label>Session  Description <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <textarea required type="text" placeholder="e,g your text here"
   value={props.sessionData.sessionDescription} 
   onChange={(e)=>props.handleChange(e)} 
   name="sessionDescription"
  />
</div>

<div className="investment-details-input-wrap">
  <label>Choose a category <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <select required  value={props.sessionData.category} 
  onChange={(e)=>props.handleChange(e)} 
  name="category">
      <option value="Personal development">Personal development</option>
      <option value="Grooming">Grooming</option>
      <option value="Parenting "> Parenting </option>
      <option value="Entrepreneur">Entrepreneur</option>
      <option value="Life skills">Life skills</option>
      <option value="Coaching">Coaching</option>
      <option value="HR">HR</option>
      <option value="General">General</option>
      <option value="Politics">Politics</option>
      <option value="Lifestyle">Lifestyle</option>
      <option value="Marriage">Marriage</option>
      <option value="Inspiration">Inspiration</option>
      <option value="Career">Career</option>
      <option value="Jobs">Jobs</option>
  </select>
  
</div>


<div className="investment-details-input-wrap">
  <label>Session  Link <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <input required type="url" placeholder="e,g your text here"
   value={props.sessionData.link} 
   onChange={(e)=>props.handleChange(e)} 
   name="link"
  />
</div>

    <div className="investment-details-input-wrap">
  <label>Date <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <DatePicker
      selected={startDate} 
      closeOnScroll={true}
      selected={props.sessionData.startDate} 
      onChange={date => props.Setsessiondata({...props.sessionData,startDate:date})  }
      name="date"
      
    />
</div>


    

   

    
<div className="add-offerbtn">
    <button >{props.pageType === "edit" ? "Edit" : "Create" }</button>
</div>



                   
</div>
</div>
</form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
