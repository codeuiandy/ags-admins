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
        <h5 class="modal-title" id="PDFModal">Create PDF</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>PDF  cover Image</label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input  
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="PDFCover" type="file"/>
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span> {props.PdfData.PDFCover === "" ? "No file chosen" : props.PdfData.PDFCover.name} </span>
             </div>
        </div>
    </div>

    <div className="investment-details-input-wrap">
  <label>PDF Title</label>
  <input type="text" placeholder="e,g your text here"
  value={props.PdfData.PDFTitle} 
  onChange={(e)=>props.handleChange(e)} 
  name="PDFTitle"
  />
</div>

<div className="investment-details-input-wrap">
  <label>PDF  Description</label>
  <input type="text" placeholder="e,g your text here"
   value={props.PdfData.PDFDescription} 
   onChange={(e)=>props.handleChange(e)} 
   name="PDFDescription"
  />
</div>



     <div className="investment-details-input-wrap">
                  <label>PDF  File </label>
     <div className="upload-investment-details">
                    <div className="uploadInvesmet-input-submit">
                    <button>Choose file</button>
                    <input type="file" 
                    
                    onChange={(e)=>props.handleFileChange(e)} 
                    name="PDFFile" />
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span> {props.PdfData.PDFFile === "" ? "No file chosen" : props.PdfData.PDFFile.name} </span>
             </div>
        </div>
    </div>

    
<div className="add-offerbtn">
    <button>Create</button>
</div>



                   
</div>
</div>
</div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
