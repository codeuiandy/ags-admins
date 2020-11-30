import React from 'react'
import {Link} from 'react-router-dom'
export default function OthersTypeModal(props) {
  return (
    <div>
      <div class="modal fade" id="OthersModal" tabindex="-1" role="dialog" aria-labelledby="OthersModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="add-investment-wrap">
          <h1>Select Category Type</h1>
          <label>Category Type*</label>
          <select onChange={(e)=>props.push(`/add_others/${e.target.value}/create/no_id`)} name="" id="">
            <option value="">Select</option>
            <option value="jobs"> Jobs</option>
            <option value="scholarships">Scholarships</option>
             <option value="fellowship"> Fellowship</option>
        
          </select> 
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
