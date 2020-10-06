import React, { Component } from 'react'

export default class BlockModal extends Component {
  constructor(props){
    super(props)
  }
    render() {
        return (
            <div>
     


<div class="modal fade" id="blockUser" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document" style={{width:"375px"}}>
    <div class="modal-content">
     
      <div class="modal-body">
        <div className="confirmWrapper">
            <p>Are you sure you want to {this.props.userStatus=== true ? "Deactivate" : "Activate"} this user?</p>
        <button onClick={this.props.blockUser} type="button" class="btn btn-danger" data-dismiss="modal">{this.props.userStatus=== true ? "Deactivate" : "Activate"}</button>
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
