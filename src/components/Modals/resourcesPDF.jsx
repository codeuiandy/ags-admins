import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddOfferModal(props) {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="PDFModal" tabindex="-1" role="dialog" aria-labelledby="PDFModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="PDFModal">{props.pageType === "edit" ? "Edit" : "Create" } PDF</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form onSubmit={props.handleSubmit} className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>PDF  cover Image</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input  
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="PDFCover" type="file"
                    required={props.pageType === "edit" ? false : true}
                    accept=".jpg,.jpeg,.png"
                    />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    {
                    props.PdfData.PDFCover === "" ? 
                    <img style={{width:"60px",height:"50px"}} 
                    src={props.PdfData.previewImg} alt="" srcset=""/> : 
                     props.PdfData.PDFCover.name
                  }
             </div>
        </div>
    </div>

    <div className="investment-details-input-wrap">
  <label>PDF Title</label>
  <input type="text" placeholder="e,g your text here"
  required
  value={props.PdfData.PDFTitle} 
  onChange={(e)=>props.handleChange(e)} 
  name="PDFTitle"
  />
</div>



<div className="investment-details-input-wrap">
  <label>PDF  Description</label>
  <input type="text" placeholder="e,g your text here"
   value={props.PdfData.PDFDescription} 
   required
   onChange={(e)=>props.handleChange(e)} 
   name="PDFDescription"
  />
</div>


<div className="investment-details-input-wrap">
  <label>Choose a category</label>
  <select required   value={props.PdfData.category} 
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
                  <label>PDF  File </label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input accept=".doc,.pdf," type="file" 
                    required={props.pageType === "edit" ? false : true}
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="PDFFile" />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    {
                      props.PdfData.PDFFile === "" ? props.PdfData.PreviewPdfFile :  props.PdfData.PDFFile.name
                 
                   } 
             </div>
        </div>
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
