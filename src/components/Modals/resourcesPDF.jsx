import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddOfferModal() {
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
                    <input type="file"/>
                    </div>

                    <div className="uploadInvesmet-input-submit">
                    <span>No file chosen</span>
             </div>
        </div>
    </div>

    <div className="investment-details-input-wrap">
  <label>PDF Title</label>
  <input type="text" placeholder="e,g your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>PDF  Description</label>
  <input type="text" placeholder="e,g your text here"/>
</div>



     <div className="investment-details-input-wrap">
                  <label>PDF  File </label>
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
