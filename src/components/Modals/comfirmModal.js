import React, { Component } from 'react'

export default class comfirmModal extends Component {
    render() {
        return (
            <div>
     


<div class="modal fade" id="ComfirmModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style={{width:"375px"}}>
    <div class="modal-content">
     
      <div class="modal-body">
        <div className="confirmWrapper">
            <p>Are you sure you want to delete thiis event?</p>
        <button type="button" class="btn btn-danger" data-dismiss="modal">Delete</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
      <div class="modal-footer">

      </div>
    </div>
  </div>
</div>
            </div>
        )
    }
}
