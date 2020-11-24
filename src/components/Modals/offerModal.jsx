import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function AddPartnersModal(props) {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="addOffereModal" tabindex="-1" role="dialog" aria-labelledby="addOffereModal" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addOffereModal"> {props.pageType==="edit" ? "Edit Partner" :"Add New Partner"}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
<form onSubmit={props.handleSubmit} className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                            <div className="investment-details-input-wrap">
                  <label>Header Image</label>
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
                  <label>Logo image </label>
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
  <label>Select Partner</label>
  <select name="" id="">
      <option value="">Select</option>
  </select>
</div>


<p className="addoffer-expiration-head">Expiration & Offer valid</p>
           <div className="addOferValidity">
               <div className="investment-details-input-wrap">
  <label>Expiration date</label>
  <DatePicker
      closeOnScroll={true}
      selected={startDate} 
      onChange={date => setStartDate(date)  }
      minDate={new Date()}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="time"
      dateFormat="MMMM d, yyyy h:mm aa"
    />
</div>

<div className="investment-details-input-wrap">
  <label>Offer valid description </label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>
           </div>

           <div className="investment-details-input-wrap">
  <label>Short  Description</label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Long  Description</label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>How it works </label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
  <label>Terms & Conditions  </label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="add-offerbtn">
    <button>Create</button>
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


