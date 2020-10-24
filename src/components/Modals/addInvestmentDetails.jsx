import React from 'react'

export default function addInvestmentDetails() {
  return (
    <div>
<div class="modal fade" id="addInvestmentDetailsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Edit Investment Opportunity </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div className="add-investment-details-wrap">

          <div className="investment-details-input-wrap">
            <label>title</label>
            <input type="text" placeholder="Low Cost housing estates"/>
          </div>

          <div className="investment-details-input-wrap">
            <label>Company </label>
            <input type="text" placeholder="Urban Estates "/>
          </div>


          <div className="investment-details-input-wrap">
            <label>Retrun on Investment</label>
            <input type="text" placeholder="2.5%"/>
          </div>



          <div className="investment-details-input-wrap">
            <label>Trade Cycle</label>
            <input type="text" placeholder="July 2020 - May 2021"/>
          </div>


          <div className="investment-details-input-wrap">
            <label>Maturity period (Monthly)</label>
            <input type="text" placeholder="Low Cost housing estates"/>
          </div>

          <div className="investment-details-input-wrap">
            <label>Description</label>
            <textarea type="text" placeholder="10"/>
          </div>

          <div className="investment-details-input-wrap">
            <label>Investment Type</label>
            <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Real estate tech</option>
           
          </select> 
          </div>

          <div className="investment-details-input-wrap">
            <label>Unit price</label>
            <input type="text" placeholder="N80,000.00"/>
          </div>


          <div className="investment-details-input-wrap">
            <label>Risk Level</label>
            <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Medium</option>
           
          </select> 
          </div>


          <div className="investment-details-input-wrap">
            <label>Status</label>
            <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Active</option>
           
          </select> 
          </div>

          <div className="investment-details-input-wrap">
            <label>Partner company</label>
            <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Urban Estates</option>
           
          </select> 
          </div>
          


          <div className="investment-details-input-wrap">
            <label>Tenor type/Pa /Flat</label>
            <select name="" id="">
            <option value="select">Select</option>
            <option value="Agric Tech">Flat</option>
           
          </select> 
          </div>


          <div className="investment-details-input-wrap">
            <label>Upload Image</label>
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


          
          <button className="submit-investment-btn">Submit</button>
        </div>
      </div>
    
    </div>
  </div>
</div>
    </div>
  )
}
