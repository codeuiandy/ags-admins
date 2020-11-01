
import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
export default function PlanModal() {
    const [startDate, setStartDate] = useState(new Date())

    return (
        <div>
            <div class="modal fade" id="PlanModals" tabindex="-1" role="dialog" aria-labelledby="PlanModals" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="PlanModals">Add New Plan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div className="">
                            <div className="funding-inputes addOffer-inputes">
                            <div className="add-investment-details-wrap">

                           


    

    <div className="investment-details-input-wrap">
  <label> Name</label>
  <input type="text" placeholder="e,g your text here"/>
</div>




<div className="investment-details-input-wrap">
  <label>  Description</label>
  <textarea type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
<label for="PlanType">Interval</label>
     <select class="form-control" id="PlanType">
       <option>Select Plan</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
   </select>
</div>

<div className="investment-details-input-wrap">
  <label>Amount  </label>
  <input type="text" placeholder="Eg. your text here"/>
</div>

<div className="investment-details-input-wrap">
<label for="PlanType">Plan Type</label>
     <select class="form-control" id="PlanType">
       <option>Select Plan</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
   </select>
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
