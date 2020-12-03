import React from 'react'
import {Link} from 'react-router-dom'
export default function AddInvestMentModal(props) {
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
          <h1>Select Investment Type</h1>
          <select onChange={(e)=>props.push(`/investment_opportunities/${e.target.value}/create/no_id`)} name="" id="">
            <option value="">Select</option>
               <option value="agric_tech">Agric Tech</option>
            <option value="real_estate">Real Estate </option>
            <option value="fixed_income">Fixed Income</option>
            <option value="others">Others</option>
        
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
