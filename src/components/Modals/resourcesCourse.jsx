import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddOfferModal(props) {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="CourseModal" tabindex="-1" role="dialog" aria-labelledby="CourseModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="CourseModal">{props.pageType === "edit" ? "Edit" : "Create" } course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={props.handleSubmit} className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>Course  cover Image <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file </button>
                    <input  
                     required={props.pageType === "edit" ? false : true}
                    // value={props.courseData.courseCover}
                    accept=".jpg,.jpeg,.png"
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="courseCover" type="file"/>
                    
                    </div>

                    <div className="uploadInvesmet-input-submit">


                  {
                    props.courseData.courseCover === "" ? 
                    <img style={{width:"60px",height:"50px"}} 
                    src={props.courseData.previewImg} alt="" srcset=""/> : 
                     props.courseData.courseCover.name
                  }
                     
                    
             </div>
        </div>
    </div>

    <div className="investment-details-input-wrap">
  <label>Course Title <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <input type="text" required placeholder="e,g your text here"
  value={props.courseData.courseTitle} 
  onChange={(e)=>props.handleChange(e)} 
  name="courseTitle"
  />
</div>



<div className="investment-details-input-wrap">
  <label>Course  Description <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <textarea type="text" required placeholder="e,g your text here"
   value={props.courseData.courseDescription} 
   onChange={(e)=>props.handleChange(e)} 
   name="courseDescription"
  />
</div>

<div className="investment-details-input-wrap">
  <label>Choose a category <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
  <select required   
  value={props.courseData.category} 
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
                  <label>Course  File <span style={{color:"rgba(255, 0, 0, 0.61)"}}>*</span></label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input type="file" 
                     required={props.pageType === "edit" ? false : true}
                    accept=".pdf,.doc"
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="courseFile" />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                      
                    {
                      props.courseData.courseFile === "" ? props.courseData.PreviewcourseFile :  props.courseData.courseFile.name
                 
                   } 
             </div>
        </div>
    </div>

    
<div className="add-offerbtn">
    <button >{props.pageType === "edit" ? "Edit" : "Create" }
    </button>
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
