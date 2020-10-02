import React, { Component } from 'react'
import './modals.css'
export default class planModal extends Component {
    render() {
        return (
            <div>
             <div class="modal fade" id="PlanModals" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5  class="centerModal-title" >Create Plan</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"
     placeholder="Enter plan"/>
   
  </div>
  <div class="form-group">
    <label for="aboutPlan">Description</label>
    <textarea  class="form-control" id="aboutPlan"/>
  </div>
 
  <div class="form-group">
    <label for="interval">Interval</label>
    <select class="form-control" id="interval">
      <option>Select Interval</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>


  <div class="form-group">
    <label for="amount">Amount</label>
    <input type="text" class="form-control" id="amount" 
     placeholder="e.g 400,000"/>
   
  </div>

  <div class="form-group">
    <label for="PlanType">Plan Type</label>
    <select class="form-control" id="PlanType">
      <option>Select Plan</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>

</form>
      </div>
      <div class="centerModal-btn">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Create</button>
      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
