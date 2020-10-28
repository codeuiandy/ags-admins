import React from 'react'
import {Link} from 'react-router-dom'
export default function AddInvestMentModal() {
  return (
    <div>
      <div class="modal fade" id="investmentModal" tabindex="-1" role="dialog" aria-labelledby="investmentModal" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="add-investment-wrap">
          <h1>Choose Your type of Investment</h1>
          <label>Investment Type*</label>
          <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Agric Tech</option>
            <option value="Agric Tech">Real Estate </option>
            <option value="Agric Tech">Fixed Income</option>
            <option value="Agric Tech">Others</option>
          </select> 
          <Link to="/investment_opportunities_step2">
          <button>Create</button>
          </Link>
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
