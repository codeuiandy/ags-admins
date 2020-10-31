import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddOfferModal() {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="CourseModal" tabindex="-1" role="dialog" aria-labelledby="CourseModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="CourseModal">Create Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>Course  cover Image</label>
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
  <label>Course Title</label>
  <input type="text" placeholder="e,g your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Choose a category</label>
  <select>
      <option value="">data 1</option>
      <option value="">data 2</option>
      <option value=""> data 3</option>
  </select>
</div>

<div className="investment-details-input-wrap">
  <label>Course  Description</label>
  <textarea type="text" placeholder="e,g your text here"/>
</div>



     <div className="investment-details-input-wrap">
                  <label>Course  File </label>
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
